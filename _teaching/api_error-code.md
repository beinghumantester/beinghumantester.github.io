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
  background: rgba(255,255,255,0.1);
  padding: 8px 15px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.2);
}

.legend-item:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.2);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
  background: white;
  color: #333;
  padding: 20px;
  border-radius: 15px;
  margin: 30px 0;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.stat-item {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.stat-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background: #eeeeee;
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
  color: #666;
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
      <div class="card yellow">
        <div class="card-front">
          <div class="status-code">100</div>
          <div class="status-name">Continue</div>
        </div>
        <div class="card-back">Server received request headers and client should proceed with request body</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card yellow">
        <div class="card-front">
          <div class="status-code">101</div>
          <div class="status-name">Switching Protocols</div>
        </div>
        <div class="card-back">Server is switching to protocol requested by client in Upgrade header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card yellow">
        <div class="card-front">
          <div class="status-code">102</div>
          <div class="status-name">Processing</div>
        </div>
        <div class="card-back">Server is processing the request but no response is available yet</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card yellow">
        <div class="card-front">
          <div class="status-code">103</div>
          <div class="status-name">Early Hints</div>
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
          <div class="status-name">OK</div>
        </div>
        <div class="card-back">Request was successful and server returned requested data</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">201</div>
          <div class="status-name">Created</div>
        </div>
        <div class="card-back">Request was successful and a new resource was created</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">202</div>
          <div class="status-name">Accepted</div>
        </div>
        <div class="card-back">Request was received but processing is not yet complete</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">203</div>
          <div class="status-name">Non-Authoritative Info</div>
        </div>
        <div class="card-back">Request successful but response contains modified information from proxy/cache</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">204</div>
          <div class="status-name">No Content</div>
        </div>
        <div class="card-back">Request successful but no content to return in response body</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">205</div>
          <div class="status-name">Reset Content</div>
        </div>
        <div class="card-back">Request successful and client should reset the form/document</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">206</div>
          <div class="status-name">Partial Content</div>
        </div>
        <div class="card-back">Server is delivering only part of resource due to Range header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">207</div>
          <div class="status-name">Multi-Status</div>
        </div>
        <div class="card-back">Multiple operations performed with individual status for each in response body</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">208</div>
          <div class="status-name">Already Reported</div>
        </div>
        <div class="card-back">Resource was already mentioned earlier in the same response</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card green">
        <div class="card-front">
          <div class="status-code">226</div>
          <div class="status-name">IM Used</div>
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
          <div class="status-name">Multiple Choices</div>
        </div>
        <div class="card-back">Multiple options available for the resource - client should choose one</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">301</div>
          <div class="status-name">Moved Permanently</div>
        </div>
        <div class="card-back">Resource has permanently moved to new URL specified in Location header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">302</div>
          <div class="status-name">Found</div>
        </div>
        <div class="card-back">Resource temporarily moved to different URL specified in Location header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">303</div>
          <div class="status-name">See Other</div>
        </div>
        <div class="card-back">Response can be found at different URI using GET method</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">304</div>
          <div class="status-name">Not Modified</div>
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
          <div class="status-code">307</div>
          <div class="status-name">Temporary Redirect</div>
        </div>
        <div class="card-back">Resource temporarily moved but client must use same HTTP method</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card purple">
        <div class="card-front">
          <div class="status-code">308</div>
          <div class="status-name">Permanent Redirect</div>
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
          <div class="status-name">Bad Request</div>
        </div>
        <div class="card-back">Server cannot process request due to malformed syntax or invalid data</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">401</div>
          <div class="status-name">Unauthorized</div>
        </div>
        <div class="card-back">Authentication is required to access the requested resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">402</div>
          <div class="status-name">Payment Required</div>
        </div>
        <div class="card-back">Reserved for future use in digital payment systems</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">403</div>
          <div class="status-name">Forbidden</div>
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
          <div class="status-name">Method Not Allowed</div>
        </div>
        <div class="card-back">HTTP method used is not supported for this resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">406</div>
          <div class="status-name">Not Acceptable</div>
        </div>
        <div class="card-back">Server cannot produce response matching Accept headers criteria</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">407</div>
          <div class="status-name">Proxy Auth Required</div>
        </div>
        <div class="card-back">Client must authenticate with proxy before accessing resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">408</div>
          <div class="status-name">Request Timeout</div>
        </div>
        <div class="card-back">Server timed out waiting for complete request from client</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">409</div>
          <div class="status-name">Conflict</div>
        </div>
        <div class="card-back">Request conflicts with current state of target resource</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">410</div>
          <div class="status-name">Gone</div>
        </div>
        <div class="card-back">Requested resource is no longer available and will not be available again</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">411</div>
          <div class="status-name">Length Required</div>
        </div>
        <div class="card-back">Server requires Content-Length header to process request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">412</div>
          <div class="status-name">Precondition Failed</div>
        </div>
        <div class="card-back">Server does not meet preconditions specified in request headers</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">413</div>
          <div class="status-name">Payload Too Large</div>
        </div>
        <div class="card-back">Request payload exceeds server's size limits</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">414</div>
          <div class="status-name">URI Too Long</div>
        </div>
        <div class="card-back">Request URI is longer than server is willing to interpret</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">415</div>
          <div class="status-name">Unsupported Media Type</div>
        </div>
        <div class="card-back">Media type of request payload is not supported by server</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">416</div>
          <div class="status-name">Range Not Satisfiable</div>
        </div>
        <div class="card-back">Range specified in Range header cannot be fulfilled</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">417</div>
          <div class="status-name">Expectation Failed</div>
        </div>
        <div class="card-back">Server cannot meet requirements of Expect request header</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">418</div>
          <div class="status-name">I'm a Teapot</div>
        </div>
        <div class="card-back">April Fool's joke - server refuses to brew coffee because it's a teapot</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">421</div>
          <div class="status-name">Misdirected Request</div>
        </div>
        <div class="card-back">Request was directed at server that cannot produce response</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">422</div>
          <div class="status-name">Unprocessable Entity</div>
        </div>
        <div class="card-back">Request is well-formed but contains semantic errors</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">423</div>
          <div class="status-name">Locked</div>
        </div>
        <div class="card-back">Resource being accessed is locked and cannot be modified</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">424</div>
          <div class="status-name">Failed Dependency</div>
        </div>
        <div class="card-back">Request failed because it depends on another failed request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">425</div>
          <div class="status-name">Too Early</div>
        </div>
        <div class="card-back">Server unwilling to process request that might be replayed</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">426</div>
          <div class="status-name">Upgrade Required</div>
        </div>
        <div class="card-back">Client must switch to different protocol to continue</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">428</div>
          <div class="status-name">Precondition Required</div>
        </div>
        <div class="card-back">Server requires request to be conditional with appropriate headers</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">429</div>
          <div class="status-name">Too Many Requests</div>
        </div>
        <div class="card-back">Client has exceeded rate limit for requests in given time period</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">431</div>
          <div class="status-name">Request Header Fields Too Large</div>
        </div>
        <div class="card-back">Request header fields are too large for server to process</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card orange">
        <div class="card-front">
          <div class="status-code">451</div>
          <div class="status-name">Unavailable For Legal Reasons</div>
        </div>
        <div class="card-back">Resource unavailable due to legal restrictions</div>
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
          <div class="status-name">Internal Server Error</div>
        </div>
        <div class="card-back">Server encountered unexpected condition preventing request fulfillment</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">501</div>
          <div class="status-name">Not Implemented</div>
        </div>
        <div class="card-back">Server does not support functionality required to fulfill request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">502</div>
          <div class="status-name">Bad Gateway</div>
        </div>
        <div class="card-back">Server acting as gateway received invalid response from upstream server</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">503</div>
          <div class="status-name">Service Unavailable</div>
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
          <div class="status-name">HTTP Version Not Supported</div>
        </div>
        <div class="card-back">HTTP version used in request is not supported by server</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">506</div>
          <div class="status-name">Variant Also Negotiates</div>
        </div>
        <div class="card-back">Server has internal configuration error in content negotiation</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">507</div>
          <div class="status-name">Insufficient Storage</div>
        </div>
        <div class="card-back">Server cannot store representation needed to complete request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">508</div>
          <div class="status-name">Loop Detected</div>
        </div>
        <div class="card-back">Server detected infinite loop while processing request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">510</div>
          <div class="status-name">Not Extended</div>
        </div>
        <div class="card-back">Further extensions required for server to fulfill request</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">511</div>
          <div class="status-name">Network Authentication Required</div>
        </div>
        <div class="card-back">Client needs to authenticate to gain network access</div>
      </div>
    </div>
    <div class="card-container">
      <div class="card red">
        <div class="card-front">
          <div class="status-code">599</div>
          <div class="status-name">Network Connect Timeout Error</div>
        </div>
        <div class="card-back">Network connection timeout occurred while processing request</div>
      </div>
    </div>
  </div>
</div>