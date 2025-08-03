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
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
}
.card {
  background-color: #eee;
  color: #fff;
  text-align: center;
  padding: 0.75rem;
  border-radius: 10px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  position: relative;
  cursor: pointer;
}
.card:hover {
  transform: rotateY(180deg);
}
.card.yellow { background: #f5b942; }
.card.green { background: #4caf50; }
.card.purple { background: #9c27b0; }
.card.orange { background: #ff9800; }
.card.red { background: #f44336; }
hr {
  margin: 2rem 0;
  border: none;
  height: 2px;
  background: #ccc;
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
  padding: 10px;
  font-size: 13px;
  text-align: center;
}
.card-back {
  transform: rotateY(180deg);
  color: #fff;
}
.card-container {
  perspective: 1000px;
}
</style>

# HTTP Status Cards

Below are flash card-style representations of HTTP status codes.
Each color represents a status code class:

- 🟡 **1xx Informational**  
- 🟢 **2xx Success**  
- 🟣 **3xx Redirection**  
- 🟠 **4xx Client Error**  
- 🔴 **5xx Server Error**

## 🟡 1xx - Informational

<div class="card-grid">
  <div class="card yellow">
    <div class="card-front">100<br>Continue</div>
    <div class="card-back">The server has received the request headers and the client should proceed to send the request body.</div>
  </div>
  <div class="card yellow">
    <div class="card-front">101<br>Switching Protocols</div>
    <div class="card-back">The requester has asked the server to switch protocols and the server has agreed.</div>
  </div>
  <div class="card yellow">
    <div class="card-front">102<br>Processing</div>
    <div class="card-back">The server is processing the request but no response is available yet.</div>
  </div>
</div>

---

## 🟢 2xx - Success

<div class="card-grid">
  <div class="card green">
    <div class="card-front">200<br>OK</div>
    <div class="card-back">The request succeeded and the server returned the requested resource.</div>
  </div>
  <div class="card green">
    <div class="card-front">201<br>Created</div>
    <div class="card-back">The request succeeded and a new resource was created.</div>
  </div>
  <div class="card green">
    <div class="card-front">202<br>Accepted</div>
    <div class="card-back">The request was accepted but not yet processed.</div>
  </div>
  <div class="card green">
    <div class="card-front">204<br>No Content</div>
    <div class="card-back">The request succeeded but there is no content to send back.</div>
  </div>
</div>

---

## 🟣 3xx - Redirection

<div class="card-grid">
  <div class="card purple">
    <div class="card-front">300<br>Multiple Choices</div>
    <div class="card-back">There are multiple options for the resource that the client may follow.</div>
  </div>
  <div class="card purple">
    <div class="card-front">301<br>Moved Permanently</div>
    <div class="card-back">The resource has been permanently moved to a new URL.</div>
  </div>
  <div class="card purple">
    <div class="card-front">302<br>Found</div>
    <div class="card-back">The resource is temporarily located at a different URL.</div>
  </div>
  <div class="card purple">
    <div class="card-front">304<br>Not Modified</div>
    <div class="card-back">The resource has not been modified since the last request.</div>
  </div>
</div>

---

## 🟠 4xx - Client Error

<div class="card-grid">
  <div class="card orange">
    <div class="card-front">400<br>Bad Request</div>
    <div class="card-back">The server could not understand the request due to invalid syntax.</div>
  </div>
  <div class="card orange">
    <div class="card-front">401<br>Unauthorized</div>
    <div class="card-back">Authentication is required to access the resource.</div>
  </div>
  <div class="card orange">
    <div class="card-front">403<br>Forbidden</div>
    <div class="card-back">The server understands the request but refuses to authorize it.</div>
  </div>
  <div class="card orange">
    <div class="card-front">404<br>Not Found</div>
    <div class="card-back">The server can’t find the requested resource.</div>
  </div>
  <div class="card orange">
    <div class="card-front">408<br>Request Timeout</div>
    <div class="card-back">The server timed out waiting for the request.</div>
  </div>
</div>

---

## 🔴 5xx - Server Error

<div class="card-grid">
  <div class="card red">
    <div class="card-front">500<br>Internal Server Error</div>
    <div class="card-back">The server encountered an unexpected condition that prevented it from fulfilling the request.</div>
  </div>
  <div class="card red">
    <div class="card-front">501<br>Not Implemented</div>
    <div class="card-back">The server does not support the functionality required to fulfill the request.</div>
  </div>
  <div class="card red">
    <div class="card-front">502<br>Bad Gateway</div>
    <div class="card-back">The server received an invalid response from the upstream server.</div>
  </div>
  <div class="card red">
    <div class="card-front">503<br>Service Unavailable</div>
    <div class="card-back">The server is not ready to handle the request. Try again later.</div>
  </div>
  <div class="card red">
    <div class="card-front">504<br>Gateway Timeout</div>
    <div class="card-back">The server didn’t receive a timely response from an upstream server.</div>
  </div>
</div>
