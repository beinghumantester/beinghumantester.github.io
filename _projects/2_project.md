---
layout: page
title: Selenium Grid E2E Framework (Pytest)
description: Distributed test execution using Selenium Grid with Pytest for scalable automation
img: /assets/img/selenium-grid-cover.png   # replace with your image
importance: 2
category: work
github: https://github.com/beinghumantester/Orange_OpenSource_Live_Pytest_Selenium_Grid
---

This project focuses on building a scalable end-to-end test automation framework using Selenium, Pytest, and Selenium Grid.

The goal was not just to automate test cases, but to enable distributed test execution and simulate real-world testing environments.

---

##  Project Overview

The framework automates key workflows of the OrangeHRM application while running tests across multiple browser instances using Selenium Grid.

It supports:

- Remote WebDriver execution  
- Parallel test execution  
- Cross-browser testing setup  
- Structured and maintainable test design  

---

##  Approach

Instead of running tests locally, this project uses Selenium Grid to distribute execution across nodes.

Key design decisions include:

- Using Pytest for test structuring and execution  
- Separating test logic from configuration  
- Managing WebDriver setup for remote execution  
- Keeping the framework extensible for scaling  

This approach reflects how automation is handled in real-world CI environments.

---

##  Tech Stack

- Selenium WebDriver  
- Python  
- Pytest  
- Selenium Grid  
- Page Object Model (POM)  

---

##  Key Features

- Distributed test execution using Selenium Grid  
- Scalable framework structure  
- Support for parallel execution  
- Clean separation of concerns  
- Easy integration with CI/CD pipelines  

---

##  Sample Execution

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/grid-1.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/grid-2.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

##  Repository

Explore the full implementation here:

 https://github.com/beinghumantester/Orange_OpenSource_Live_Pytest_Selenium_Grid

---

##  Key Takeaway

This project highlights an important shift in testing:

Automation is not just about writing tests —  
it is about how efficiently those tests can run at scale.

By introducing Selenium Grid, this project moves from simple automation to distributed testing, which is essential for modern test environments.