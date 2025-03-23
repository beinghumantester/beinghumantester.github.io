---
title: "Selenium Grid With Python"
excerpt: "Parallel Testing Made Simple: Setting Up Selenium Grid and Pytest Framework"
collection: testing-mindspace
---


# Setting Up Selenium Grid with Pytest Framework

Selenium Grid stands out as an essential tool for test automation engineers looking to run tests across multiple browsers and environments simultaneously. When integrated with Pytest, this powerful combination provides a streamlined approach to parallel test execution. This guide walks through the practical steps to establish a working Selenium Grid environment with Pytest.

## Prerequisites

Before diving into the setup, make sure these components are installed:
* Python (version 3.x recommended)
* Java Runtime Environment (necessary for Selenium Grid operation)
* Google Chrome and corresponding ChromeDriver
* A properly configured requirements.txt file

## Step 1: Install Required Dependencies

Begin by creating a clean virtual environment for the project:

```sh
# Create isolated environment
python -m venv
# For Mac/Linux systems   
source venv/bin/activate
 # For Windows systems  
venv\Scripts\activate 
pip install -r requirements.txt
```

## Step 2: Configure Selenium Grid

Selenium Grid operates on a Hub-Node model. The Hub coordinates test distribution while Nodes execute the actual tests.

1. Download the latest Selenium Server JAR file(latest version 4.29.0) from the Selenium website 
https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.29.0/selenium-server-4.29.0.jar
2. Launch the Hub server:

```sh
java -jar selenium-server-4.29.0.jar hub --host 0.0.0.0 --port 4444
```

3. Start a Node and connect it to the Hub:

```sh
java -jar selenium-server-4.29.0.jar node --hub http://172.18.208.1:4444
```

In this example, `172.18.208.1` is the IP address of the machine running the Hub. Your IP address might be different depending on your network configuration.

### Finding Your Hub IP Address

To determine the Selenium Grid hub URL, check the logs displayed in your terminal after running the hub command. Once the hub starts, look for a log line that mentions:

```
Selenium Grid ready on: http://<your-machine-ip>:4444
```

Alternatively, if you need to explicitly find the IP address of your machine, you can run:

* On **Windows (CMD or PowerShell)**:
```sh
ipconfig
```
Look for the `IPv4 Address` under your active network adapter.

* On **macOS/Linux**:
```sh
ifconfig | grep "inet "
```
or
```sh
hostname -I
```

For the node, after running:
```sh
java -jar selenium-server-4.29.0.jar node --hub http://172.18.208.1:4444
```
Check the terminal output to verify that the node is successfully connected to the hub.

If you are running Selenium Grid inside a **Docker container**, the IP might be different (e.g., `172.x.x.x`). You can find it by running:
```sh
docker network inspect bridge
```

## Step 3: Confirm Grid Functionality

Verify the Grid setup by opening a browser and navigating to:

```
http://localhost:4444
```

A successful setup displays the Grid console interface showing connected Nodes ready for test execution.

## Step 4: Integrate Pytest with Selenium Grid

Configure Pytest to utilize the Grid through either a configuration file or directly in test scripts.

Example configuration file (config.json):

```json
{
  "grid_url": "http://localhost:4444/wd/hub",
  "browser": "chrome"
}
```

Alternatively, implement Grid connection in test code:

```python
from selenium import webdriver

def test_example():
    options = webdriver.ChromeOptions()
    driver = webdriver.Remote(
        command_executor="http://172.18.208.1:4444/wd/hub",
        options=options
    )
    driver.get("https://example.com")
    assert "Example Domain" in driver.title
    driver.quit()
```

Note how we're using the specific IP address in the command_executor parameter, matching the one used when starting the node.

## Step 5: Run Tests on the Grid

Execute tests against the Grid infrastructure:

```sh
pytest --grid-url http://172.18.208.1:4444/wd/hub --browser chrome
```

For enhanced parallel execution capabilities:

```sh
pytest -n 3 --html=reports/report.html
```

This command distributes test execution across three concurrent browser instances, significantly reducing total runtime.

## Step 6: Review Test Results

Following test execution, examine the generated reports located in the `reports/` directory. The HTML report format provides comprehensive insights into test status, execution logs, and failure details.

## Troubleshooting Common Issues

When encountering setup problems:
* **Node registration failures**: Confirm Hub IP address and port settings in Node configuration
* **Browser launch issues**: Verify correct WebDriver installation and version compatibility
* **Connection errors**: Ensure both Hub and Nodes are running and network connectivity exists between them

By following this implementation approach, testing teams can drastically reduce execution time while maintaining comprehensive browser coverage. The Selenium Grid and Pytest combination delivers an ideal balance of performance and reliability for modern test automation needs.