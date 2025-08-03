---
title: "HTTP Status Code Cards"
collection: testing-musings
type: "API Errors"
permalink: /testing-musings/http-status-cards
venue: "API"
date: 2024-10-10
location: "Error-Code"
---

<style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 40px auto;
    max-width: 1200px;
  }

  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 2px solid #ccc;
    margin: 60px auto 20px;
    text-align: center;
    width: 100%;
  }

  .flip-card {
    background-color: transparent;
    width: 250px;
    height: 150px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .flip-card-front {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .flip-card-back {
    transform: rotateY(180deg);
    font-size: 0.95rem;
  }

  .yellow { border-color: #FFD700; background: #FFFAE6; }
  .green { border-color: #4CAF50; background: #E8F5E9; }
  .purple { border-color: #9C27B0; background: #F3E5F5; }
  .orange { border-color: #FF9800; background: #FFF3E0; }
  .red { border-color: #F44336; background: #FFEBEE; }
</style>

<div class="section-title">1xx Informational</div>
<div class="card-container">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front yellow">100 💬<br>Continue</div>
      <div class="flip-card-back yellow">The server has received the request headers and the client should proceed to send the request body.</div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front yellow">101 🔄<br>Switching Protocols</div>
      <div class="flip-card-back yellow">The requester has asked the server to switch protocols and the server has agreed to do so.</div>
    </div>
  </div>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front yellow">102 ⏳<br>Processing</div>
      <div class="flip-card-back yellow">WebDAV request received and being processed, but no response is available yet.</div>
    </div>
  </div>
</div>

<!-- Remaining 2xx, 3xx, 4xx, 5xx series cards to be appended here in same structure -->
