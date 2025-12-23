---
layout: archive
title: "What I Learned Today"
permalink: /wilt/
author_profile: true
---

<div class="wilt-container">
  <header class="wilt-header">
    
    <p>Documenting daily discoveries and insights in technology and personal growth</p>
    
    <div class="category-filter">
      <button class="filter-btn active" data-category="all">All</button>
      <button class="filter-btn" data-category="testing">Testing</button>
      <button class="filter-btn" data-category="development">Development</button>
      <button class="filter-btn" data-category="personal">Personal Growth</button>
    </div>
  </header>

  <div class="timeline">

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">22nd December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Refactoring API Utils and Final E2E Flow</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Refactored API logic and completed full E2E validation.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Refactored API calls into utility files.</li>
        <li><b>Description:</b> Isolated API logic from UI tests and completed an end to end flow using both API and UI.</li>
        <li><b>Key Takeaway:</b> Clean separation improves readability and maintenance.</li>
        <li><b>Personal Reflection:</b> This felt like putting all pieces together properly.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">21st December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>API Integration with Web Tests</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Combined API and UI testing using Playwright.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Used Playwright request API with UI tests.</li>
        <li><b>Description:</b> Created orders using APIs and validated them through UI flows.</li>
        <li><b>Key Takeaway:</b> Mixing API and UI reduces execution time.</li>
        <li><b>Personal Reflection:</b> This approach feels more practical for real projects.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">20th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>End to End Test Flow</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Automated a complete user journey.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Automated product selection and order placement.</li>
        <li><b>Description:</b> Added assertions and handled sync issues across the flow.</li>
        <li><b>Key Takeaway:</b> E2E tests demand clarity and patience.</li>
        <li><b>Personal Reflection:</b> Felt rewarding when the full flow passed.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">19th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Reports, Traces, Logs and Screenshots</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Understood test result visibility in Playwright.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Explored HTML reports and traces.</li>
        <li><b>Description:</b> Used logs and screenshots to analyze failures.</li>
        <li><b>Key Takeaway:</b> Debugging is easier when reports are clear.</li>
        <li><b>Personal Reflection:</b> Failures feel less scary with proper visibility.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">18th December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Playwright Inspector and Codegen</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Used debugging and recording tools.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Debugged scripts using inspector.</li>
        <li><b>Description:</b> Recorded scripts with codegen and analyzed output.</li>
        <li><b>Key Takeaway:</b> Debug tools save a lot of effort.</li>
        <li><b>Personal Reflection:</b> Felt more confident fixing issues.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">17th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>textContent vs inputValue</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Understood the difference between reading text and input values.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Compared textContent and inputValue methods.</li>
        <li><b>Description:</b> Learned when to use textContent for visible text and inputValue for form fields.</li>
        <li><b>Key Takeaway:</b> Using the wrong method gives misleading results.</li>
        <li><b>Personal Reflection:</b> Small API differences can cause big confusion.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">16th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Handling Child Windows and Tabs</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Switched between multiple browser windows and tabs.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Managed multiple browser contexts.</li>
        <li><b>Description:</b> Learned how Playwright handles tabs without breaking the main flow.</li>
        <li><b>Key Takeaway:</b> Context control is essential for real-world scenarios.</li>
        <li><b>Personal Reflection:</b> This solved many doubts I had earlier.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">15th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Validating Attributes with Async Await</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Used async await correctly while validating UI attributes.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Combined assertions with async calls.</li>
        <li><b>Description:</b> Validated element attributes without timing issues.</li>
        <li><b>Key Takeaway:</b> Async handling reduces flaky tests.</li>
        <li><b>Personal Reflection:</b> Timing issues started making sense.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">14th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Dropdowns, Radio Buttons and Checkboxes</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Automated common UI controls.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Worked with dropdowns, radio buttons and checkboxes.</li>
        <li><b>Description:</b> Added assertions to validate user selections.</li>
        <li><b>Key Takeaway:</b> Small UI elements still need proper validation.</li>
        <li><b>Personal Reflection:</b> These appear simple but are used everywhere.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">13th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Handling New Pages and Navigation</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Managed page navigation and new tabs dynamically.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Used proper waits for new pages.</li>
        <li><b>Description:</b> Avoided race conditions during navigation.</li>
        <li><b>Key Takeaway:</b> Navigation handling is critical in service-based apps.</li>
        <li><b>Personal Reflection:</b> Tests felt more stable after this.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">12th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Understanding Wait Mechanisms</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Learned how Playwright waits automatically.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Studied auto wait behavior.</li>
        <li><b>Description:</b> Avoided unnecessary manual waits.</li>
        <li><b>Key Takeaway:</b> Less waiting code means cleaner tests.</li>
        <li><b>Personal Reflection:</b> This reduced flakiness a lot.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">11th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Handling Multiple Elements</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Worked with locators returning multiple elements.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Iterated over element lists.</li>
        <li><b>Description:</b> Validated content across multiple UI items.</li>
        <li><b>Key Takeaway:</b> Real pages rarely have single elements.</li>
        <li><b>Personal Reflection:</b> This felt closer to real testing work.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">10th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Extracting Text and Validations</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Validated UI text using assertions.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Extracted text from UI elements.</li>
        <li><b>Description:</b> Matched expected values using expect.</li>
        <li><b>Key Takeaway:</b> Assertions make tests meaningful.</li>
        <li><b>Personal Reflection:</b> Validation finally felt natural.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">9th December</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Locators and Element Interaction</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Used different locator strategies.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Worked with text, role and attribute locators.</li>
        <li><b>Description:</b> Typed into inputs and clicked elements.</li>
        <li><b>Key Takeaway:</b> Good locators improve test stability.</li>
        <li><b>Personal Reflection:</b> Locator choice matters more than expected.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">8th December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Playwright Interview Role Play</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Observed how Playwright concepts are explained in interviews.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Followed mock interview discussions.</li>
        <li><b>Description:</b> Noted how real-world examples were used.</li>
        <li><b>Key Takeaway:</b> Explanation skills matter as much as knowledge.</li>
        <li><b>Personal Reflection:</b> It showed where I need more clarity.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">7th December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Assertions and Multi Browser Setup</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Configured tests to run across browsers.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Used expect assertions across browsers.</li>
        <li><b>Description:</b> Ran tests on Chromium, Firefox and WebKit.</li>
        <li><b>Key Takeaway:</b> Cross browser testing reveals hidden issues.</li>
        <li><b>Personal Reflection:</b> Configuration felt less scary now.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">6th December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Playwright Configuration File</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Understood the role of playwright.config.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Reviewed config options.</li>
        <li><b>Description:</b> Controlled retries, reporters and browsers.</li>
        <li><b>Key Takeaway:</b> Good config avoids chaos.</li>
        <li><b>Personal Reflection:</b> Structure brings confidence.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">5th December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Browser Context and Page Fixtures</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Learned how Playwright isolates tests.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Worked with browser contexts.</li>
        <li><b>Description:</b> Managed pages independently per test.</li>
        <li><b>Key Takeaway:</b> Isolation prevents flaky tests.</li>
        <li><b>Personal Reflection:</b> This concept cleared many doubts.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">4th December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Async Await and Test Structure</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Understood async await usage in Playwright.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Applied async await correctly.</li>
        <li><b>Description:</b> Learned how Playwright executes steps.</li>
        <li><b>Key Takeaway:</b> Async handling avoids timing bugs.</li>
        <li><b>Personal Reflection:</b> JavaScript felt clearer today.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">3rd December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Fixing npm Issues on Windows</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Resolved npm errors in PowerShell.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Solved permission and path issues.</li>
        <li><b>Description:</b> Understood why npm fails sometimes.</li>
        <li><b>Key Takeaway:</b> Environment issues are part of learning.</li>
        <li><b>Personal Reflection:</b> Debugging builds resilience.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">2nd December</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>npm Project Setup and Playwright Install</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Set up Playwright project.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Installed Playwright dependencies.</li>
        <li><b>Description:</b> Verified browser installation.</li>
        <li><b>Key Takeaway:</b> Strong setup avoids future pain.</li>
        <li><b>Personal Reflection:</b> Setup done right saves time later.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Personal Growth">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">1st December</span>
      <span class="category-tag" role="button" data-category="Personal Growth">Personal Growth</span>
    </div>
    <h2>Course Preparation and Code Download</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Prepared learning environment.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Downloaded course code.</li>
        <li><b>Description:</b> Reviewed folder structure and plan.</li>
        <li><b>Key Takeaway:</b> Preparation sets the tone.</li>
        <li><b>Personal Reflection:</b> Starting calmly helps learning flow.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>










  <div class="archives-link">
    <a href="/wilt-november">View Previous Entries</a>
  </div>

</div>

  
</div>

<style>
.wilt-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

.wilt-header {
  text-align: center;
  margin-bottom: 60px;
}

.wilt-header h1 {
  font-size: 3em;
  color: #1a202c;
  margin-bottom: 15px;
  font-weight: 700;
  background: linear-gradient(120deg, #4299e1, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.category-filter {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: white;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn.active {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

.timeline {
  position: relative;
  padding: 40px 0;
}

.timeline-entry {
  position: relative;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

.timeline-content {
  background: white;
  border-radius: 15px;
  padding: 25px;
  margin-left: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #4299e1;
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.entry-date {
  font-size: 0.9rem;
  color: #4299e1;
  font-weight: 600;
}

.category-tag {
  padding: 4px 12px;
  background: rgba(66, 153, 225, 0.1);
  color: #4299e1;
  border-radius: 12px;
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-tag:hover {
  background: rgba(66, 153, 225, 0.2);
}

.entry-preview {
  margin-bottom: 20px;
}

.expand-btn {
  padding: 6px 12px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s ease;
}

.expand-btn:hover {
  background: #3182ce;
}

.entry-full {
  margin-top: 20px;
}

.entry-full ul {
  list-style-type: none;
  padding: 0;
}

.entry-full li {
  margin-bottom: 15px;
  line-height: 1.6;
}

.hidden {
  display: none;
}

.archives-link {
  text-align: center;
  margin-top: 40px;
}

.archives-link a {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(120deg, #4299e1, #667eea);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.archives-link a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #4299e1;
  border-radius: 50%;
  position: absolute;
  left: -6px;
  top: 30px;
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .wilt-container {
    padding: 20px;
  }
  
  .timeline-content {
    margin-left: 20px;
  }
  
  .category-filter {
    flex-wrap: wrap;
  }
}
</style>




{% if jekyll.environment == "production" %}
  <script src="{{ '/assets/js/wilt.js' | relative_url }}"></script>
{% else %}
  <script src="{{ '/assets/js/wilt.js' | absolute_url }}"></script>
{% endif %}
