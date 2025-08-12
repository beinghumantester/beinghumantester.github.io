---
title: "CI/CD Pipeline for Pytest Projects"
collection: testing-musings
type: "CI/CD Pipeline"
permalink: /testing-musings/ci_cd_pipeline_setup_in_pytest
venue: "Jenkins"
date: 2025-08-12
location: "Continuous Integration"
---



# Setting Up a CI/CD Pipeline for Pytest Projects with Jenkins & Docker

Continuous Integration (CI) and Continuous Deployment (CD) help automate the process of building, testing, and deploying applications.

In this guide, we’ll create a **Jenkins pipeline** that:
1. Pulls Python project code from **GitHub**
2. Installs dependencies and runs **Pytest** tests
3. Builds a **Docker image** of the project
4. Pushes the image to **Docker Hub**
5. Sends an email notification for build success or failure

---


<img src='/images/ci_cd_flow.png'>


## 1. Prerequisites

Before starting, ensure you have:

- **GitHub account** with your Pytest project in a repository
- **Jenkins** installed and running
- **Docker** installed on the Jenkins server
- **Docker Hub** account
- **Python** and **pip** installed (for running tests)
- Basic understanding of Git, Docker, and Jenkins pipelines

---

## 2. Step 1 – Push Your Project to GitHub

1. Create a new GitHub repository (public or private).
2. Push your Pytest project code to it:

```bash
git init
git remote add origin https://github.com/<your-username>/<your-repo>.git
git add .
git commit -m "Initial commit"
git push origin main
```

---

## 3. Step 2 – Create a Jenkins Pipeline Job

1. Open **Jenkins Dashboard**.
2. Click **New Item**, give a pipeline name, select **Pipeline**, and click **OK**.
3. Add a description such as:
   ```
   This pipeline pulls code, runs tests, builds a Docker image, and pushes it to Docker Hub.
   ```
4. Check **GitHub Project** and paste your GitHub repo URL.
5. In **Build Triggers**, select **GitHub hook trigger for GITScm polling**.

---

## 4. Step 3 – Create a Jenkinsfile

The **Jenkinsfile** defines your pipeline steps. Place it in the root of your GitHub project so Jenkins can read it automatically.

Example **Jenkinsfile**:

```groovy
pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/<your-repo>.git'
            }
        }

        stage('List Files') {
            steps {
                bat 'dir' // Use 'ls' for Linux
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'pip install -r requirements.txt'
            }
        }

        stage('Run Pytest') {
            steps {
                bat 'pytest'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t <dockerhub-username>/<image-name> .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        bat """
                        docker login -u <dockerhub-username> -p ${dockerhubpwd}
                        docker push <dockerhub-username>/<image-name>
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            script {
                mail to: 'recipient@example.com',
                     subject: "✅ BUILD SUCCESS: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                     body: """
Build Success!

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Status: ${currentBuild.currentResult}

Build URL: ${env.BUILD_URL}
                     """
            }
        }
        failure {
            script {
                mail to: 'recipient@example.com',
                     subject: "❌ BUILD FAILURE: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                     body: """
Build Failed!

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}
Status: ${currentBuild.currentResult}

Check console output: ${env.BUILD_URL}console
                     """
            }
        }
        unstable {
            script {
                mail to: 'recipient@example.com',
                     subject: "⚠️ BUILD UNSTABLE: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                     body: """
Build Unstable!

Some tests may have failed.

Job: ${env.JOB_NAME}
Build Number: ${env.BUILD_NUMBER}

Build URL: ${env.BUILD_URL}
                     """
            }
        }
    }
}
```

---

## 5. Step 4 – Add Docker Hub Credentials to Jenkins

1. Go to **Jenkins Dashboard → Manage Jenkins → Credentials**.
2. Select **(global)** → **Add Credentials**.
3. In **Kind**, select **Secret Text**.
4. Paste your Docker Hub password in **Secret**.
5. Set **ID** as `dockerhub-pwd` (this matches the Jenkinsfile).

---

## 6. Step 5 – Create a Dockerfile

Place a **Dockerfile** in your project root:

```dockerfile
FROM python:3.10

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["pytest"]
```

---

## 7. Step 6 – Build and Run the Pipeline

1. Commit your **Jenkinsfile** and **Dockerfile** to GitHub.
2. Open Jenkins, click **Build Now** on your pipeline.
3. Jenkins will:
   - Pull the code from GitHub
   - List project files
   - Install dependencies
   - Run Pytest tests
   - Build and tag a Docker image
   - Push the image to Docker Hub
   - Send an email notification with the build result

---

## 8. Troubleshooting Common Issues

- **DNS issues in Docker** – Update network settings to use `8.8.8.8` and `8.8.4.4` as DNS servers.
- **Permission denied for Docker commands** – Ensure Jenkins user is in the `docker` group.
- **Docker login failures** – Check credentials in Jenkins.

---

## Final Workflow

**GitHub Commit → Jenkins Build → Test with Pytest → Docker Image Build → Push to Docker Hub → Email Notification**
