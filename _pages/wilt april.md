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




<article class="timeline-entry" data-category="learning">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="entry-header">
            <span class="entry-date">31st March</span>
            <span class="category-tag" role="button" data-category="learning">Learning</span>
        </div>
        <h2>Thinking in Systems</h2>
        <div class="entry-preview">
            <p><b>Learning:</b> Explored the foundational principles of System Thinking.</p>
            <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
        </div>
        <div class="entry-full hidden">
            <ul>
                <li><b>Description:</b> Understood feedback loops, leverage points, and the importance of viewing problems holistically.</li>
                <li><b>Key Takeaway:</b> Systems are interconnected — seeing the big picture helps in solving deeper problems.</li>
                <li><b>Personal Reflection:</b> This mindset shift feels powerful — like zooming out to truly *see* the map, not just the road.</li>
            </ul>
            <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
        </div>
    </div>
</article>

<article class="timeline-entry" data-category="learning">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="entry-header">
            <span class="entry-date">30th March</span>
            <span class="category-tag" role="button" data-category="learning">Learning</span>
        </div>
        <h2>Cracking Collections: Lists, Tuples & Dictionaries</h2>
        <div class="entry-preview">
            <p><b>Learning:</b> Dived deep into Python’s core data structures.</p>
            <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
        </div>
        <div class="entry-full hidden">
            <ul>
                <li><b>Description:</b> Practiced use cases, differences, and performance implications of lists, tuples, and dictionaries.</li>
                <li><b>Key Takeaway:</b> Choosing the right data structure makes your code not only cleaner, but smarter.</li>
                <li><b>Personal Reflection:</b> The subtle elegance of Python shines through its simplicity — every structure has a story.</li>
            </ul>
            <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
        </div>
    </div>
</article>

<article class="timeline-entry" data-category="learning">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="entry-header">
            <span class="entry-date">29th March</span>
            <span class="category-tag" role="button" data-category="learning">Learning</span>
        </div>
        <h2>Book in Progress: Growth-Driven Strategy</h2>
        <div class="entry-preview">
            <p><b>Learning:</b> Continued exploring strategic principles for sustainable product and team growth.</p>
            <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
        </div>
        <div class="entry-full hidden">
            <ul>
                <li><b>Description:</b> Read about aligning vision, execution, and feedback cycles in teams.</li>
                <li><b>Key Takeaway:</b> Strategy without learning is just motion. Growth needs rhythm.</li>
                <li><b>Personal Reflection:</b> These pages echo my daily work — trying to bridge intention with action.</li>
            </ul>
            <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
        </div>
    </div>
</article>

<article class="timeline-entry" data-category="learning">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="entry-header">
            <span class="entry-date">28th March</span>
            <span class="category-tag" role="button" data-category="learning">Learning</span>
        </div>
        <h2>API Testing in Motion</h2>
        <div class="entry-preview">
            <p><b>Learning:</b> Explored endpoint testing and chaining in Postman.</p>
            <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
        </div>
        <div class="entry-full hidden">
            <ul>
                <li><b>Description:</b> Focused on response validation, dynamic variables, and API workflows in Postman.</li>
                <li><b>Key Takeaway:</b> A well-structured API test tells a complete user story — start to finish.</li>
                <li><b>Personal Reflection:</b> Postman continues to amaze me — not just for testing, but for telling API tales.</li>
            </ul>
            <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
        </div>
    </div>
</article>

<article class="timeline-entry" data-category="learning">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <div class="entry-header">
            <span class="entry-date">27th March</span>
            <span class="category-tag" role="button" data-category="learning">Learning</span>
        </div>
        <h2>Automation Conversations</h2>
        <div class="entry-preview">
            <p><b>Learning:</b> Explored various automation frameworks and their design philosophies.</p>
            <button class="expand-btn" onclick="toggleContent(this)">Read More</button>
        </div>
        <div class="entry-full hidden">
            <ul>
                <li><b>Description:</b> Compared BDD, hybrid, and keyword-driven frameworks, and their use in real projects.</li>
                <li><b>Key Takeaway:</b> Automation is not just about tools — it is about designing thoughtful solutions.</li>
                <li><b>Personal Reflection:</b> Sometimes, frameworks whisper patterns if you listen closely — today, I listened.</li>
            </ul>
            <button class="expand-btn" onclick="toggleContent(this)">Show Less</button>
        </div>
    </div>
</article>



</div>



  <div class="archives-link">
    <a href="/wilt-march">View Previous Entries</a>
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