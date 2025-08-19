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


  <article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">16th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Database Testing</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Worked with queries to check data validation and consistency in databases.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Worked with queries to check data validation and consistency in databases.</li>
        <li><b>Description:</b> Verified data integrity across tables, and tested CRUD operations with real datasets.</li>
        <li><b>Key Takeaway:</b> Databases are the heart of applications, small issues there can cause big failures.</li>
        <li><b>Personal Reflection:</b> Running SQL felt like directly peeking under the hood of the system.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">15th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Mocking APIs</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Practiced mocking APIs to test workflows without depending on live services.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Practiced mocking APIs to test workflows without depending on live services.</li>
        <li><b>Description:</b> Built mock responses for endpoints and checked how the application behaved with them.</li>
        <li><b>Key Takeaway:</b> Mocking speeds up testing and makes it possible to simulate cases that are hard to reproduce in real APIs.</li>
        <li><b>Personal Reflection:</b> It felt like having a controlled playground for experiments.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">14th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Data Driven Testing in Pytest</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Tried parameterizing tests in pytest to run the same test with different inputs.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Tried parameterizing tests in pytest to run the same test with different inputs.</li>
        <li><b>Description:</b> Used datasets to automatically check multiple scenarios in a clean way.</li>
        <li><b>Key Takeaway:</b> Saves time and reduces duplication when writing tests.</li>
        <li><b>Personal Reflection:</b> Felt rewarding to see a single test handle many cases smoothly.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">13th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Markers and Fixtures in Pytest</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Looked into how markers and fixtures can control and organize test runs in pytest.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Looked into how markers and fixtures can control and organize test runs in pytest.</li>
        <li><b>Description:</b> Played with custom markers to group tests and fixtures to share common setups.</li>
        <li><b>Key Takeaway:</b> They make test suites more readable and maintainable.</li>
        <li><b>Personal Reflection:</b> It gave me a sense of structure and cleanliness in my test code.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">12th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Playwright Fixtures</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Learned how fixtures in Playwright help in managing browser setup and teardown.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Learned how fixtures in Playwright help in managing browser setup and teardown.</li>
        <li><b>Description:</b> Used fixtures to open browsers, manage context, and close them cleanly after runs.</li>
        <li><b>Key Takeaway:</b> Fixtures make tests more reliable and reduce repetitive code.</li>
        <li><b>Personal Reflection:</b> It gave me a more professional way of managing test lifecycles.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">11th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>BDD with Pytest</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Mixed BDD style scenarios with pytest to see how they complement each other.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Mixed BDD style scenarios with pytest to see how they complement each other.</li>
        <li><b>Description:</b> Wrote feature-like tests but executed them with pytest’s simple structure.</li>
        <li><b>Key Takeaway:</b> Combining tools can give the clarity of BDD with the speed of pytest.</li>
        <li><b>Personal Reflection:</b> It was fun to see natural language style tests actually run as code.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="AI">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">10th August</span>
      <span class="category-tag" role="button" data-category="AI">AI</span>
    </div>
    <h2>Context Precision and Recall</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Explored how precision and recall play a role in evaluating responses in AI systems.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Explored how precision and recall play a role in evaluating responses in AI systems.</li>
        <li><b>Description:</b> Precision focused on accuracy while recall ensured coverage of information.</li>
        <li><b>Key Takeaway:</b> A balance of both is important to trust AI output.</li>
        <li><b>Personal Reflection:</b> It reminded me of the daily trade-offs testers make between depth and breadth.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">9th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Pytest Metrics for LLM Evaluation</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Applied pytest-based metrics to evaluate responses from an LLM.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Applied pytest-based metrics to evaluate responses from an LLM.</li>
        <li><b>Description:</b> Built test cases that measured quality and reliability of model answers.</li>
        <li><b>Key Takeaway:</b> Metrics make it easier to treat AI outputs like real test results instead of guesses.</li>
        <li><b>Personal Reflection:</b> It was interesting to give structure to something as vague as AI answers.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">8th August</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Playwright MCP Server</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Looked into MCP server in Playwright and how it supports automation workflows.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Looked into MCP server in Playwright and how it supports automation workflows.</li>
        <li><b>Description:</b> Understood its role in managing multiple projects and automation tasks.</li>
        <li><b>Key Takeaway:</b> Knowing how servers like this work makes setting up complex tests easier.</li>
        <li><b>Personal Reflection:</b> It felt like unlocking another layer of flexibility in Playwright.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>


  <article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">7th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Sentry and Error Monitoring</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Looked into Sentry and how it helps track issues in applications.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Looked into Sentry and how it helps track issues in applications.</li>
        <li><b>Description:</b> Understood how developers and testers can monitor errors in real time and get better visibility into problems.</li>
        <li><b>Key Takeaway:</b> Good monitoring makes debugging faster and keeps teams more confident about releases.</li>
        <li><b>Personal Reflection:</b> It feels like a safety net for applications when things go wrong.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">6th August</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>CI/CD with Jenkins</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Set up a basic pipeline using Jenkins for smoother automation runs.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Set up a basic pipeline using Jenkins for smoother automation runs.</li>
        <li><b>Description:</b> Built a pipeline that runs test jobs automatically whenever there is a change in code.</li>
        <li><b>Key Takeaway:</b> Automation feels more reliable when pipelines take care of repetitive work.</li>
        <li><b>Personal Reflection:</b> It was satisfying to see tests run without me triggering them manually.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">5th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Prompt Enhancement</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Tried improving prompts to see how AI responds differently with small changes.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Tried improving prompts to see how AI responds differently with small changes.</li>
        <li><b>Description:</b> Played with wording, context, and instructions to test consistency in answers.</li>
        <li><b>Key Takeaway:</b> Even tiny changes in prompts can give completely new insights.</li>
        <li><b>Personal Reflection:</b> It made me more thoughtful about how I ask questions to both people and machines.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">4th August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>API Automation</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Practiced building and running simple API test flows with Python.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Practiced building and running simple API test flows with Python.</li>
        <li><b>Description:</b> Focused on requests, responses, and validation checks.</li>
        <li><b>Key Takeaway:</b> APIs are the backbone of most systems, so testing them thoroughly really matters.</li>
        <li><b>Personal Reflection:</b> It felt nice to see my tests directly confirm if the data flow was right or wrong.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Development">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">3rd August</span>
      <span class="category-tag" role="button" data-category="Development">Development</span>
    </div>
    <h2>Playwright MCP Server</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Went through the MCP server in Playwright and its use for extending testing workflows.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Went through the MCP server in Playwright and its use for extending testing workflows.</li>
        <li><b>Description:</b> Understood how it manages multiple projects and supports automation setups.</li>
        <li><b>Key Takeaway:</b> Knowing how servers like this work makes handling test frameworks much easier.</li>
        <li><b>Personal Reflection:</b> It showed me how flexible Playwright can be when setting up custom environments.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">2nd August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Evaluating LLM with Pytest Metrics</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Tried checking AI outputs using structured pytest-based metrics.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Tried checking AI outputs using structured pytest-based metrics.</li>
        <li><b>Description:</b> Wrote tests to measure accuracy and reliability of model responses.</li>
        <li><b>Key Takeaway:</b> Testing AI needs more than intuition, metrics give a clearer picture.</li>
        <li><b>Personal Reflection:</b> Felt closer to treating AI as just another system under test.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>

<article class="timeline-entry" data-category="Testing">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="entry-header">
      <span class="entry-date">1st August</span>
      <span class="category-tag" role="button" data-category="Testing">Testing</span>
    </div>
    <h2>Context Precision and Recall</h2>
    <div class="entry-preview">
      <p><b>Learning:</b> Studied context precision and recall to understand how they shape AI evaluation.</p>
      <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
    </div>
    <div class="entry-full hidden">
      <ul>
        <li><b>Learning:</b> Studied context precision and recall to understand how they shape AI evaluation.</li>
        <li><b>Description:</b> Looked at examples where recall helped cover more ground and precision narrowed focus.</li>
        <li><b>Key Takeaway:</b> Both matter, depending on whether you want broad coverage or sharp accuracy.</li>
        <li><b>Personal Reflection:</b> It reminded me of testing trade-offs we make daily between depth and coverage.</li>
      </ul>
      <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
    </div>
  </div>
</article>



<div class="archives-link">
    <a href="/wilt-june">View Previous Entries</a>
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
