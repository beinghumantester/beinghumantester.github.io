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
.code-card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.flip-card {
  background-color: transparent;
  width: 200px;
  height: 260px;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1.2rem;
  backface-visibility: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.95rem;
}

.flip-card-front {
  background-color: #e3f2fd;
  color: #0d47a1;
}

.flip-card-back {
  background-color: #f1f8e9;
  color: #33691e;
  transform: rotateY(180deg);
}
</style>

<h2>🃏 HTTP Status Code Flashcards</h2>
<p style="text-align: center;">Hover over or tap the cards to flip and learn more about each status code.</p>

<div class="code-card-grid">

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>200</h2>
        <p>✅ OK</p>
      </div>
      <div class="flip-card-back">
        <p><strong>Success.</strong> The request has succeeded.</p>
        <p>Example: `/api/user/123`</p>
        <p>Tip: All systems working fine.</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>201</h2>
        <p>🎉 Created</p>
      </div>
      <div class="flip-card-back">
        <p><strong>Resource created.</strong></p>
        <p>Example: `/api/register`</p>
        <p>Tip: Check location header if needed.</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>301</h2>
        <p>🧭 Moved Permanently</p>
      </div>
      <div class="flip-card-back">
        <p><strong>Redirect.</strong> Resource has a new URI.</p>
        <p>Example: `/old-page` → `/new-page`</p>
        <p>Tip: Update your bookmarks.</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>400</h2>
        <p>🚫 Bad Request</p>
      </div>
      <div class="flip-card-back">
        <p><strong>Client error.</strong> Request was invalid.</p>
        <p>Example: `/api/data?limit=abc`</p>
        <p>Tip: Validate input before sending.</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>401</h2>
        <p>🔐 Unauthorized</p>
      </div>
      <div class="flip-card-back">
        <p><strong>Auth failed.</strong> Token missing or invalid.</p>
        <p>Example: Accessing `/dashboard` without login</p>
        <p>Tip: Attach valid credentials.</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>403</h2>
        <p>⛔ Forbidden</p>
      </div>
      <div class="flip-card-back">
        <p><strong>Access denied.</strong> You're not allowed here.</p>
        <p>Example: `/admin/panel` as regular user</p>
        <p>Tip: Role check or permission error.</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>404</h2>
        <p>❌ Not Found</p>
      </div>
      <div class="flip-card-back">
        <p><strong>Missing resource.</strong> It’s not here.</p>
        <p>Example: `/no-such-endpoint`</p>
        <p>Tip: Check the spelling and path.</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h2>500</h2>
        <p>🔥 Server Error</p>
      </div>
      <div class="flip-card-back">
        <p><strong>It’s on the server.</strong> Something broke.</p>
        <p>Example: Database connection failure</p>
        <p>Tip: Check logs or restart service.</p>
      </div>
    </div>
  </div>

</div>
