---
title: "HTTP Status Code Cards"
collection: testing-musings
type: "API Errors"
permalink: /testing-musings/http-status-cards
venue: "API"
date: 2024-10-10
location: "Error-Code"
---

<!-- HTTP Status Code Cards - Color Coded Flip Cards -->
<style>
  .http-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    margin: 2rem 0;
  }
  .http-flip-card {
    perspective: 1000px;
  }
  .http-flip-inner {
    position: relative;
    width: 100%;
    height: 160px;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .http-flip-card:hover .http-flip-inner {
    transform: rotateY(180deg);
  }
  .http-card-front, .http-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .http-card-front {
    z-index: 2;
  }
  .http-card-back {
    transform: rotateY(180deg);
    font-weight: normal;
  }
  .border-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: 2px solid #999;
    border-radius: 8px;
    margin: 2rem 0 1rem;
    background: #f2f2f2;
  }
  .yellow { background-color: #f5c542; }
  .green { background-color: #4CAF50; }
  .purple { background-color: #9c27b0; }
  .orange { background-color: #FF9800; }
  .red { background-color: #f44336; }
</style>

<div class="border-title">1xx - Informational Responses</div>
<div class="http-cards-container">
  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front yellow">100 Continue</div>
    <div class="http-card-back yellow">Server has received the request headers. Client can proceed with request body.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front yellow">101 Switching Protocols</div>
    <div class="http-card-back yellow">Client requested protocol switch. Server agrees and is switching.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front yellow">102 Processing</div>
    <div class="http-card-back yellow">Server has received and is processing the request, but no response yet.</div>
  </div></div>
</div>

<div class="border-title">2xx - Success</div>
<div class="http-cards-container">
  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front green">200 OK</div>
    <div class="http-card-back green">The request succeeded and the server responded with the requested data.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front green">201 Created</div>
    <div class="http-card-back green">A new resource has been created successfully.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front green">202 Accepted</div>
    <div class="http-card-back green">Request accepted but not completed yet. It may be processed later.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front green">204 No Content</div>
    <div class="http-card-back green">Request processed successfully but no content is returned.</div>
  </div></div>
</div>

<div class="border-title">3xx - Redirection</div>
<div class="http-cards-container">
  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front purple">301 Moved Permanently</div>
    <div class="http-card-back purple">Resource has been permanently moved to a new URL.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front purple">302 Found</div>
    <div class="http-card-back purple">Resource temporarily located at a different URL.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front purple">304 Not Modified</div>
    <div class="http-card-back purple">The resource hasn't changed since the last request.</div>
  </div></div>
</div>

<div class="border-title">4xx - Client Errors</div>
<div class="http-cards-container">
  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front orange">400 Bad Request</div>
    <div class="http-card-back orange">The request is invalid or malformed.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front orange">401 Unauthorized</div>
    <div class="http-card-back orange">Authentication is required and has failed or is missing.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front orange">403 Forbidden</div>
    <div class="http-card-back orange">Client does not have permission to access the resource.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front orange">404 Not Found</div>
    <div class="http-card-back orange">Requested resource could not be found on the server.</div>
  </div></div>
</div>

<div class="border-title">5xx - Server Errors</div>
<div class="http-cards-container">
  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front red">500 Internal Server Error</div>
    <div class="http-card-back red">Server encountered an unexpected issue while processing the request.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front red">501 Not Implemented</div>
    <div class="http-card-back red">Server doesn't support the requested functionality.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front red">502 Bad Gateway</div>
    <div class="http-card-back red">Received an invalid response from an upstream server.</div>
  </div></div>

  <div class="http-flip-card"><div class="http-flip-inner">
    <div class="http-card-front red">503 Service Unavailable</div>
    <div class="http-card-back red">Server is currently overloaded or down for maintenance.</div>
  </div></div>
</div>

