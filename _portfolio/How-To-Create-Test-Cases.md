---
title: "Test Cases"
excerpt: "In the below mind map, all the columns required for creating effective test cases are mentioned."
# collection: testing-mindspace
---

This mind map consists of all the essential components required for writing efficient test cases.
<img src='/images/Teststeps.jpg'>

* **Test Scenario** : The Test Scenario is the starting point of a test case and represents the high-level functionality or feature being tested. It provides a concise description of what needs to be validated, ensuring testers focus on the specific area of the application under test. This column helps in grouping test cases logically and maintaining clarity in the test documentation.

* **Test Case Name** : The Test Case Name is a unique identifier for the test case. It should clearly reflect the purpose of the test, making it easier for testers and stakeholders to identify and refer to. A meaningful and structured name ensures better traceability and organization of test cases within the testing suite.

* **Pre-Conditions** : The Pre-Conditions section outlines the setup or conditions that must be fulfilled before executing the test case. This can include specific configurations, login requirements, or data availability. Ensuring pre-conditions are met is critical to avoid unnecessary failures and to maintain consistency in testing.

* **Test Steps** : The Test Steps column provides a detailed, step-by-step guide on how to execute the test case. Each step should be precise and actionable, enabling testers to follow a clear process without ambiguity. Well-defined test steps are essential for achieving consistent results across different testers and environments.

* **Priority** : The Priority column indicates the importance of the test case. It helps testers determine the execution order by categorizing test cases into high, medium, or low priority. This ensures that critical functionality is tested first, especially when time or resources are limited.

* **Expected Result** : The Expected Result defines the anticipated outcome of the test case when all steps are executed correctly. This column acts as a benchmark for verifying the correctness of the application. Clear and specific expected results help testers easily identify deviations during execution.

* **Actual Result** : The Actual Result captures the observed behavior of the application after executing the test steps. This information is compared to the expected result to determine whether the test has passed or failed. Detailed actual results also help in diagnosing issues when discrepancies arise.

* **Test Data** : The Test Data column, though optional, documents the specific data used during test execution. Including this information can add clarity, especially for tests dependent on dynamic inputs or specific data sets. It also aids in reproducing issues and conducting future analysis.

* **Result** : The Result column provides the final verdict on the test case, indicating whether it passed or failed. This summary is derived from the comparison between the expected and actual results. A well-documented result column simplifies reporting and decision-making for further action.

**Example Test Case: Login Page**

| Test Case ID | Test Scenario | Test Case Name | Pre-Conditions | Test Steps | Priority | Expected Result | Actual Result | Test Data | Result |
|-------------|--------------|----------------|----------------|------------|----------|-----------------|---------------|-----------|--------|
| TC001 | Verify Login Functionality | Valid Login | User should be registered | 1. Navigate to the login page  2. Enter valid credentials  3. Click on Login button | High | User should be redirected to the dashboard | As expected | Username: testuser, Password: Test@123 | Pass |
| TC002 | Verify Login with Invalid Password | Invalid Password | User should be registered | 1. Navigate to the login page  2. Enter valid username and invalid password  3. Click on Login button | High | Error message 'Invalid credentials' should be displayed | As expected | Username: testuser, Password: WrongPass | Pass |
| TC003 | Verify Login with Empty Fields | Empty Credentials | None | 1. Navigate to the login page  2. Leave both fields empty  3. Click on Login button | Medium | Error message 'Username and password are required' should be displayed | As expected | None | Pass |
| TC004 | Verify Login with Unregistered User | Unregistered User | None | 1. Navigate to the login page  2. Enter unregistered username and password  3. Click on Login button | Medium | Error message 'User does not exist' should be displayed | As expected | Username: newuser, Password: Test@123 | Pass |

**Some other Test Case Columns for efficient test cases:**

* **Test Case ID** : The Test Case ID is a unique identifier assigned to each test case. It helps in organizing, tracking, and referencing test cases within the test management system. A systematic naming convention for test case IDs ensures better traceability and facilitates easier mapping with requirements, defects, or test results.

* **Evidence** : The Evidence column plays a crucial role in supporting the pass or fail verdict of a test case. It typically includes screenshots, logs, or recordings captured during test execution to validate the observed results. Providing evidence adds credibility and transparency to the testing process, enabling stakeholders to verify the outcome confidently.

**Best Practices for Writing Efficient Test Cases:**

* **Merge Test Cases Where Possible** : To avoid an unnecessary number of test cases, similar scenarios should be merged wherever possible. This reduces redundancy, simplifies test management, and enhances efficiency. However, ensure that merging does not compromise the clarity or intent of the test case.

* **Use Simple and Clear Language** : The language used in test cases should be simple and easy to understand. It should be written in a way that both technical and non-technical stakeholders can grasp the objective of the test case. Avoid technical jargon unless absolutely necessary, and focus on clarity and readability.

By following these practices, test cases can be more effective, maintainable, and easier to execute, ultimately improving the overall quality of the testing process.
