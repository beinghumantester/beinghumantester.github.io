---
title: "Setting Up Pytest for Automation Project"
excerpt: "A comprehensive guide to setting up Pytest, configuring test suites, structuring projects, and running tests effectively."
collection: testing-mindspace
---

Pytest is a powerful testing framework for Python, widely used for functional and API testing. Its simplicity, scalability, and rich plugin ecosystem make it an excellent choice for test automation.

## Installing Pytest

Before setting up Pytest, ensure you have Python installed. If not, download and install Python from the [official website](https://www.python.org/downloads/).

To install Pytest, run the following command:

```
pip install pytest
```

To verify the installation, check the version:

```
pytest --version
```

## Project Structure

A well-structured project improves maintainability. Below is an ideal setup for a Pytest-based automation framework:

```
project-root/
│── tests/
│   ├── test_admin.py
│   ├── test_dashboard.py
│   ├── conftest.py
│
│── utilities/
│   ├── BaseClass.py
│
│── TestData/
│   ├── AdminData.py
│
│── pageObjects/
│   ├── Admin.py
│
│── reports/
│   ├── screenshots/
│
│── README.md
```

## Writing Test Cases

### Basic Test Case

Create a simple test file in the `tests/` directory, for example, `test_sample.py`:

```python
def test_example():
    assert 1 + 1 == 2
```

Run the test using:

```
pytest tests/test_sample.py
```

### Using Assertions

Pytest uses standard Python `assert` statements for validation:

```python
def test_string():
    message = "Hello Pytest"
    assert message.startswith("Hello")
```

### Markers for Categorizing Tests

Markers help organize and execute specific test groups:

```python
import pytest

@pytest.mark.smoke
def test_smoke():
    assert 5 * 5 == 25
```

Run only smoke tests:

```
pytest -m smoke
```

## Configuring Pytest

### `pytest.ini`

To configure global settings, create a `pytest.ini` file:

```
[pytest]
testpaths = tests
addopts = -v --html=report.html --self-contained-html
markers =
    smoke: Smoke tests
```

### `conftest.py` for Fixtures

Fixtures help in setting up preconditions for tests:

```python
import pytest

@pytest.fixture
def setup():
    print("Setting up test environment")
    yield
    print("Tearing down test environment")
```

## Running Tests

Run all tests:

```
pytest
```

Generate an HTML report:

```
pytest --html=report.html
```

## Logging and Reporting

### Logging

To capture logs, configure `pytest.ini`:

```
log_cli = true
log_cli_level = INFO
log_file = logfile.log
log_file_level = INFO
```

### Allure Reporting

To generate advanced reports, install Allure:

```
pip install allure-pytest
```

Run tests with Allure reporting:

```
pytest --alluredir=reports/
```

## Best Practices

1. **Use Fixtures Effectively:** Reduce code duplication by utilizing fixtures.
2. **Use Page Object Model (POM):** Keep UI interactions in `pageObjects/`.
3. **Categorize Tests with Markers:** Make test execution structured.
4. **Generate Reports:** Always generate HTML/Allure reports.
5. **Automate Test Execution:** Integrate Pytest with CI/CD tools.

## Conclusion

Setting up Pytest for automation is straightforward when you follow a structured approach. With the setup described here, you can build a robust, maintainable, and scalable test automation framework.

By leveraging Pytest's powerful features like fixtures, markers, and reporting, you can create a seamless testing workflow that enhances software quality.
