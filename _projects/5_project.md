---
layout: page
title: BDD Automation with Behave (Without POM)
description: Behavior-driven test automation using Behave and Gherkin without Page Object Model abstraction
img: /assets/img/behave.jpg   # replace with your image
importance: 5
category: work
github: https://github.com/beinghumantester/Behave_Framework_Without_POM
---

This project focuses on implementing behavior-driven testing using the Behave framework.

Unlike traditional automation frameworks that rely heavily on Page Object Model (POM), this project explores a simpler approach by directly working with step definitions and scenarios.

---

##  Project Overview

The framework automates key workflows of the OrangeHRM application using Gherkin-based test scenarios.

It emphasizes readability and collaboration by expressing test cases in a format that is easy to understand for both technical and non-technical stakeholders.

---

##  Approach

This project intentionally avoids Page Object Model to explore a different testing approach.

Key focus areas include:

- Writing clear and expressive Gherkin scenarios  
- Mapping scenarios directly to step definitions  
- Keeping the framework lightweight and easy to understand  
- Reducing abstraction where it is not necessary  

This helps in understanding when simplicity can be more effective than over-structured design.

---

##  Tech Stack

- Python  
- Behave (BDD Framework)  
- Selenium WebDriver  

---

##  Key Features

- Behavior-driven development using Gherkin  
- Human-readable test scenarios  
- Lightweight framework without POM  
- Focus on readability and clarity  

---

##  Sample Scenario


Feature: Login functionality

  Scenario: Valid user login
    Given user is on login page
    When user enters valid credentials
    Then user should be redirected to dashboard

 ## Repository

Explore the full implementation here:

 https://github.com/beinghumantester/Behave_Framework_Without_POM

## Key Takeaway

Not every testing problem needs heavy abstraction.

This project highlights an important lesson:

Good test design is not about following patterns blindly,
but about choosing the right level of structure for the problem.