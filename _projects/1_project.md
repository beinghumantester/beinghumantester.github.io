---
layout: page
title: OrangeHRM E2E Testing (Playwright + JS)
description: End-to-end test automation framework for OrangeHRM using Playwright and JavaScript
img: /assets/img/orange-hrm2.png   # replace with your actual image
importance: 1
category: work
github: https://github.com/beinghumantester/OrangeHRMWebsite-E2E-PW_JS
---

This project focuses on building a scalable and reliable end-to-end test automation framework for the OrangeHRM application using Playwright and JavaScript.

Unlike basic automation setups, the goal here was not just to automate flows, but to design a structure that supports maintainability, readability, and real-world testing needs.

---

##  Project Overview

The framework automates key user workflows such as:

- Login and authentication flows  
- Employee management actions  
- Navigation across modules  
- Form validations and UI checks  

It is designed to simulate real user behavior and validate system functionality across different scenarios.

---

##  Approach

Instead of writing isolated test scripts, the focus was on:

- Creating reusable page objects  
- Keeping test logic separate from selectors  
- Writing clean and readable test cases  
- Ensuring stability with proper waits and assertions  

This makes the framework easier to scale as the application grows.

---

##  Tech Stack

- Playwright  
- JavaScript  
- Node.js  
- Page Object Model (POM)  

---

##  Key Features

- Structured test organization  
- Reusable components for common actions  
- Clear separation of test data and logic  
- Easy to extend for new test scenarios  

---

##  Sample Execution

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/orangehrm-1.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/orangehrm-2.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

##  Repository

You can explore the complete implementation here:

 https://github.com/beinghumantester/OrangeHRMWebsite-E2E-PW_JS

---

##  Key Takeaway

This project helped reinforce an important idea:

Test automation is not just about writing scripts.  
It is about designing systems that remain useful as complexity increases.

The focus was on building something that is not only functional today, but maintainable tomorrow.