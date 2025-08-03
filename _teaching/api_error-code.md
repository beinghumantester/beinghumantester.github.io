---
title: "API HTTP Error Code"
collection: testing-musings
type: "API Testing"
permalink: /testing-musings/http-error-code-flashcards
venue: "API"
date: 2025-08-02
location: "HTTP Error Code"
---

<style>
* {
  box-sizing: border-box;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.2rem;
  margin-bottom: 15px;
  color: #333;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 20px 0 40px 0;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
}

.legend-color {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 1.6rem;
  margin-bottom: 25px;
  text-align: center;
  font-weight: 700;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
  max-width: 1200px;
  margin: 0 auto;
}

.card-container {
  perspective: 1000px;
  height: 130px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: pointer;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card:hover {
  transform: rotateY(180deg);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  color: white;
  text-align: center;
  font-weight: 600;
}

.card-back {
  transform: rotateY(180deg);
  font-size: 13px;
  line-height: 1.4;
  padding: 12px;
}

.card-front .status-code {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 5px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.card-front .status-name {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

/* Color Classes */
.yellow { 
  background: linear-gradient(135deg, #f5b942 0%, #f39c12 100%); 
}
.green { 
  background: linear-gradient(135deg, #4caf50 0%, #45a049 100%); 
}
.purple { 
  background: linear-gradient(135deg, #9c27b0 0%, #8e24aa 100%); 
}
.orange { 
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); 
}
.red { 
  background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%); 
}

.stats-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 15px;
  margin: 30px 0;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.stat-item {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
  }
  
  .legend {
    gap: 15px;
  }
  
  .card-container {
    height: 120px;
  }
  
  .card-front .status-code {
    font-size: 1.6rem;
  }
  
  .card-front .status-name {
    font-size: 11px;
  }
  
  .card-back {
    font-size: 12px;
  }
}
</style>

<div class="header">
  <h1>🚀 HTTP Status Code Flashcards</h1>
  <p>Interactive reference guide for API developers and testers</p>
</div>

<div class="legend">
  <div class="legend-item">
    <div class="legend-color yellow"></div>
    <span>1xx Informational</span>
  </div>
  <div class="legend-item">
    <div class="legend-color green"></div>
    <span>2xx Success</span>
  </div>
  <div class="legend-item">
    <div class="legend-color purple"></div>
    <span>3xx Redirection</span>
  </div>
  <div class="legend-item">
    <div class="legend-color orange"></div>
    <span>4xx Client Error</span>
  </div>
  <div class="legend-item">
    <div class="legend-color red"></div>
    <span>5xx Server Error</span>
  </div>
</div>

<div class="stats-container">
  <h3>Quick Stats</h3>
  <div class="stats-grid">
    <div class="stat-item">
      <div class="stat-number">4</div>
      <div class="stat-label">Informational</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">10</div>
      <div class="stat-label">Success</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">9</div>
      <div class="stat-label">Redirection</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">33</div>
      <div class="stat-label">Client Error</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">12</div>
      <div class="stat-label">Server Error</div>
    </div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">🟡 1xx - Informational Responses</h2>
  <div class="card-grid">
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">503</div>
          <div class="status-name">Server Busy</div>
        </div>
        <div class="card-back">Server temporarily unable to handle request due to overload or maintenance</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">504</div>
          <div class="status-name">Gateway Timeout</div>
        </div>
        <div class="card-back">Server acting as gateway did not receive timely response from upstream</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">505</div>
          <div class="status-name">HTTP Version Unsupported</div>
        </div>
        <div class="card-back">HTTP version used in request is not supported by server</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">506</div>
          <div class="status-name">Config Error</div>
        </div>
        <div class="card-back">Server has internal configuration error in content negotiation</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">507</div>
          <div class="status-name">Storage Full</div>
        </div>
        <div class="card-back">Server cannot store representation needed to complete request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">508</div>
          <div class="status-name">Infinite Loop</div>
        </div>
        <div class="card-back">Server detected infinite loop while processing request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">510</div>
          <div class="status-name">Extension Required</div>
        </div>
        <div class="card-back">Further extensions required for server to fulfill request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">511</div>
          <div class="status-name">Network Auth Needed</div>
        </div>
        <div class="card-back">Client needs to authenticate to gain network access</div>
      </div>
    </div>
  </div>
</div>

<div class="stats-container" style="margin-top: 40px;">
  <h3>💡 Pro Tips for API Testing</h3>
  <div style="text-align: left; margin-top: 20px;">
    <p><strong>🔍 Testing Strategy:</strong></p>
    <ul style="margin: 10px 0; padding-left: 20px;">
      <li>Always test for common 4xx errors (400, 401, 403, 404)</li>
      <li>Simulate server errors (5xx) for resilience testing</li>
      <li>Verify redirect handling for 3xx responses</li>
      <li>Test rate limiting scenarios (429)</li>
    </ul>
    
    <p style="margin-top: 20px;"><strong>🚀 Quick Reference:</strong></p>
    <ul style="margin: 10px 0; padding-left: 20px;">
      <li><strong>2xx:</strong> Success - Everything worked as expected</li>
      <li><strong>4xx:</strong> Client Error - Check your request</li>
      <li><strong>5xx:</strong> Server Error - Not your fault, try again later</li>
    </ul>
  </div>
</div>

---

<div style="text-align: center; margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
  <p><strong>📚 Learning Resources</strong></p>
  <p>Hover over any card to reveal the detailed explanation. Use this as a quick reference during API development and testing!</p>
  <p style="margin-top: 15px; font-size: 14px; color: #666;">
    <em>Created for API developers, testers, and anyone working with HTTP protocols. Bookmark this page for quick reference!</em>
  </p>
</div>d yellow">
        <div class="card-front">
          <div class="status-code">100</div>
          <div class="status-name">Keep Going</div>
        </div>
        <div class="card-back">Server received request headers and client should proceed with request body</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card yellow">
        <div class="card-front">
          <div class="status-code">101</div>
          <div class="status-name">Protocol Switch</div>
        </div>
        <div class="card-back">Server is switching to protocol requested by client in Upgrade header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card yellow">
        <div class="card-front">
          <div class="status-code">102</div>
          <div class="status-name">Still Working</div>
        </div>
        <div class="card-back">Server is processing the request but no response is available yet</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card yellow">
        <div class="card-front">
          <div class="status-code">103</div>
          <div class="status-name">Heads Up</div>
        </div>
        <div class="card-back">Server is sending preliminary response headers while preparing final response</div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">🟢 2xx - Success Responses</h2>
  <div class="card-grid">
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">200</div>
          <div class="status-name">All Good</div>
        </div>
        <div class="card-back">Request was successful and server returned requested data</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">201</div>
          <div class="status-name">Successfully Created</div>
        </div>
        <div class="card-back">Request was successful and a new resource was created</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">202</div>
          <div class="status-name">Request Queued</div>
        </div>
        <div class="card-back">Request was received but processing is not yet complete</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">203</div>
          <div class="status-name">Modified Info</div>
        </div>
        <div class="card-back">Request successful but response contains modified information from proxy/cache</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">204</div>
          <div class="status-name">Success No Data</div>
        </div>
        <div class="card-back">Request successful but no content to return in response body</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">205</div>
          <div class="status-name">Reset Form</div>
        </div>
        <div class="card-back">Request successful and client should reset the form/document</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">206</div>
          <div class="status-name">Partial Data</div>
        </div>
        <div class="card-back">Server is delivering only part of resource due to Range header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">207</div>
          <div class="status-name">Multiple Results</div>
        </div>
        <div class="card-back">Multiple operations performed with individual status for each in response body</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">208</div>
          <div class="status-name">Already Mentioned</div>
        </div>
        <div class="card-back">Resource was already mentioned earlier in the same response</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">226</div>
          <div class="status-name">Instance Modified</div>
        </div>
        <div class="card-back">Server fulfilled GET request using instance manipulations</div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">🟣 3xx - Redirection Messages</h2>
  <div class="card-grid">
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">300</div>
          <div class="status-name">Choose Option</div>
        </div>
        <div class="card-back">Multiple options available for the resource - client should choose one</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">301</div>
          <div class="status-name">Moved Forever</div>
        </div>
        <div class="card-back">Resource has permanently moved to new URL specified in Location header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">302</div>
          <div class="status-name">Moved Temporarily</div>
        </div>
        <div class="card-back">Resource temporarily moved to different URL specified in Location header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">303</div>
          <div class="status-name">Look Elsewhere</div>
        </div>
        <div class="card-back">Response can be found at different URI using GET method</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">304</div>
          <div class="status-name">Use Cache</div>
        </div>
        <div class="card-back">Cached version is still valid - no modification since last request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">305</div>
          <div class="status-name">Use Proxy</div>
        </div>
        <div class="card-back">Request must be made through specified proxy (deprecated)</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">306</div>
          <div class="status-name">Status Unused</div>
        </div>
        <div class="card-back">Reserved status code that is no longer used</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">307</div>
          <div class="status-name">Temp Redirect Same Method</div>
        </div>
        <div class="card-back">Resource temporarily moved but client must use same HTTP method</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">308</div>
          <div class="status-name">Perm Redirect Same Method</div>
        </div>
        <div class="card-back">Resource permanently moved but client must use same HTTP method</div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">🟠 4xx - Client Error Responses</h2>
  <div class="card-grid">
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">400</div>
          <div class="status-name">Invalid Request</div>
        </div>
        <div class="card-back">Server cannot process request due to malformed syntax or invalid data</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">401</div>
          <div class="status-name">Login Required</div>
        </div>
        <div class="card-back">Authentication is required to access the requested resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">402</div>
          <div class="status-name">Payment Needed</div>
        </div>
        <div class="card-back">Reserved for future use in digital payment systems</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">403</div>
          <div class="status-name">Access Denied</div>
        </div>
        <div class="card-back">Server understands request but refuses to authorize access</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">404</div>
          <div class="status-name">Not Found</div>
        </div>
        <div class="card-back">Requested resource could not be found on the server</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">405</div>
          <div class="status-name">Method Blocked</div>
        </div>
        <div class="card-back">HTTP method used is not supported for this resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">406</div>
          <div class="status-name">Format Rejected</div>
        </div>
        <div class="card-back">Server cannot produce response matching Accept headers criteria</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">407</div>
          <div class="status-name">Proxy Login Required</div>
        </div>
        <div class="card-back">Client must authenticate with proxy before accessing resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">408</div>
          <div class="status-name">Request Expired</div>
        </div>
        <div class="card-back">Server timed out waiting for complete request from client</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">409</div>
          <div class="status-name">Resource Conflict</div>
        </div>
        <div class="card-back">Request conflicts with current state of target resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">410</div>
          <div class="status-name">Permanently Gone</div>
        </div>
        <div class="card-back">Requested resource is no longer available and will not be available again</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">411</div>
          <div class="status-name">Size Required</div>
        </div>
        <div class="card-back">Server requires Content-Length header to process request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">412</div>
          <div class="status-name">Condition Failed</div>
        </div>
        <div class="card-back">Server does not meet preconditions specified in request headers</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">413</div>
          <div class="status-name">Request Too Big</div>
        </div>
        <div class="card-back">Request payload exceeds server's size limits</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">414</div>
          <div class="status-name">URL Too Long</div>
        </div>
        <div class="card-back">Request URI is longer than server is willing to interpret</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">415</div>
          <div class="status-name">Format Not Supported</div>
        </div>
        <div class="card-back">Media type of request payload is not supported by server</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">416</div>
          <div class="status-name">Range Invalid</div>
        </div>
        <div class="card-back">Range specified in Range header cannot be fulfilled</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">417</div>
          <div class="status-name">Expectation Not Met</div>
        </div>
        <div class="card-back">Server cannot meet requirements of Expect request header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">418</div>
          <div class="status-name">Coffee Teapot Error</div>
        </div>
        <div class="card-back">April Fool's joke - server refuses to brew coffee because it's a teapot</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">420</div>
          <div class="status-name">Slow Down</div>
        </div>
        <div class="card-back">Rate limiting response used by Twitter API</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">422</div>
          <div class="status-name">Data Invalid</div>
        </div>
        <div class="card-back">Request is well-formed but contains semantic errors</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">423</div>
          <div class="status-name">Resource Locked</div>
        </div>
        <div class="card-back">Resource being accessed is locked and cannot be modified</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">424</div>
          <div class="status-name">Dependency Failed</div>
        </div>
        <div class="card-back">Request failed because it depends on another failed request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">425</div>
          <div class="status-name">Request Too Early</div>
        </div>
        <div class="card-back">Server unwilling to process request that might be replayed</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">426</div>
          <div class="status-name">Upgrade Needed</div>
        </div>
        <div class="card-back">Client must switch to different protocol to continue</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">428</div>
          <div class="status-name">Condition Required</div>
        </div>
        <div class="card-back">Server requires request to be conditional with appropriate headers</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">429</div>
          <div class="status-name">Rate Limit Hit</div>
        </div>
        <div class="card-back">Client has exceeded rate limit for requests in given time period</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">431</div>
          <div class="status-name">Headers Too Big</div>
        </div>
        <div class="card-back">Request header fields are too large for server to process</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">444</div>
          <div class="status-name">Silent Drop</div>
        </div>
        <div class="card-back">Nginx server returns no information and closes connection</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">449</div>
          <div class="status-name">Try Again</div>
        </div>
        <div class="card-back">Client should retry request after performing appropriate action</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">450</div>
          <div class="status-name">Parental Block</div>
        </div>
        <div class="card-back">Access blocked by Windows Parental Controls</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">451</div>
          <div class="status-name">Legal Block</div>
        </div>
        <div class="card-back">Resource unavailable due to legal restrictions</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">499</div>
          <div class="status-name">Client Disconnected</div>
        </div>
        <div class="card-back">Client closed connection before server could send response</div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">🔴 5xx - Server Error Responses</h2>
  <div class="card-grid">
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">500</div>
          <div class="status-name">Server Broke</div>
        </div>
        <div class="card-back">Server encountered unexpected condition preventing request fulfillment</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">501</div>
          <div class="status-name">Feature Missing</div>
        </div>
        <div class="card-back">Server does not support functionality required to fulfill request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">502</div>
          <div class="status-name">Gateway Error</div>
        </div>
        <div class="card-back">Server acting as gateway received invalid response from upstream server</div>
      </div>
    </div>
    <div class="card-container">
      <div class="car