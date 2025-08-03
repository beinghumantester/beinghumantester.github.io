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
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 1rem;
    }
    h2 {
      text-align: center;
      margin: 2rem 0 1rem;
      padding: 1rem;
      background-color: #eee;
      border-radius: 0.5rem;
    }
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }
    .card {
      perspective: 1000px;
    }
    .card-inner {
      position: relative;
      width: 100%;
      min-height: 200px;
      transform-style: preserve-3d;
      transition: transform 0.6s;
    }
    .card:hover .card-inner {
      transform: rotateY(180deg);
    }
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 0.5rem;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .card-front {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .card-back {
      transform: rotateY(180deg);
      font-size: 0.95rem;
      text-align: center;
      justify-content: center;
    }
    .info    { background-color: #facc15; } /* 1xx - yellow */
    .success { background-color: #4ade80; } /* 2xx - green */
    .redirect{ background-color: #a78bfa; } /* 3xx - purple */
    .client  { background-color: #fb923c; } /* 4xx - orange */
    .server  { background-color: #f87171; } /* 5xx - red */
  </style>
</head>
<body>

<h1 style="text-align:center">Complete HTTP Status Code Cards</h1>

<h2>1xx Status Codes - Informational</h2>
<div class="card-container">
  <div class="card"><div class="card-inner info">
    <div class="card-front">100<br>Keep Going</div>
    <div class="card-back">Server received request headers and client should proceed with request body</div>
  </div></div>
  <div class="card"><div class="card-inner info">
    <div class="card-front">101<br>Protocol Switch</div>
    <div class="card-back">Server is switching to protocol requested by client in Upgrade header</div>
  </div></div>
  <div class="card"><div class="card-inner info">
    <div class="card-front">102<br>Still Working</div>
    <div class="card-back">Server is processing the request but no response is available yet</div>
  </div></div>
  <div class="card"><div class="card-inner info">
    <div class="card-front">103<br>Heads Up</div>
    <div class="card-back">Server is sending preliminary response headers while preparing final response</div>
  </div></div>
</div>

<h2>2xx Status Codes - Success</h2>
<div class="card-container">
  <!-- All 2xx Cards -->
</div>

<h2>3xx Status Codes - Redirection</h2>
<div class="card-container">
  <!-- All 3xx Cards -->
</div>

<h2>4xx Status Codes - Client Error</h2>
<div class="card-container">
  <!-- All 4xx Cards -->
</div>

<h2>5xx Status Codes - Server Error</h2>
<div class="card-container">
  <!-- All 5xx Cards -->
</div>

</body>
</html>

