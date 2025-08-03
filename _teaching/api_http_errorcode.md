---
title: "HTTP Status Code Cards"
collection: testing-musings
type: "API Errors"
permalink: /testing-musings/http-status-cards
venue: "API"
date: 2024-10-10
location: "Error-Code"
---

<!-- BEGIN: HTTP Status Code Flip Cards -->
<style>
  .flip-card {
    background-color: transparent;
    width: 250px;
    height: 180px;
    perspective: 1000px;
    margin: 10px;
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
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
  }
  .flip-card-front {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
  }
  .flip-card-back {
    transform: rotateY(180deg);
    font-size: 14px;
    overflow-y: auto;
    line-height: 1.4;
  }
  .status-1xx { border: 3px solid #f1c40f; background: #f9e79f; color: #000; }
  .status-2xx { border: 3px solid #27ae60; background: #a9dfbf; color: #000; }
  .status-3xx { border: 3px solid #9b59b6; background: #d7bde2; color: #000; }
  .status-4xx { border: 3px solid #e67e22; background: #f8c471; color: #000; }
  .status-5xx { border: 3px solid #e74c3c; background: #f5b7b1; color: #000; }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: flex-start;
  }
</style>

<div class="card-container">
  <!-- Sample Card -->
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front status-1xx">
        <div>100</div>
        <div>Continue</div>
      </div>
      <div class="flip-card-back status-1xx">
        Interim response. Request received and not rejected. Client should continue sending the rest of the request.
      </div>
    </div>
  </div>
  <!-- Repeat this block for all codes, using correct color class and description -->
  <!-- Cards will be programmatically inserted below -->
</div>

<script>
  const codes = [
    { code: 100, title: "Continue", desc: "Interim response. Request received and not rejected. Client should continue sending the rest of the request." },
    { code: 101, title: "Switching Protocol", desc: "Sent in response to Upgrade header. Server is switching protocols." },
    { code: 102, title: "Processing (WebDAV)", desc: "Server has received and is processing the request. No response yet." },
    { code: 103, title: "Early Hints", desc: "Client should start preloading resources while server prepares the final response." },
    { code: 200, title: "OK", desc: "The request has succeeded." },
    { code: 201, title: "Created", desc: "The request succeeded, and a new resource was created." },
    { code: 202, title: "Accepted", desc: "The request was received but is not yet completed." },
    { code: 203, title: "Non-Authoritative Information", desc: "Metadata returned is from a third-party copy, not original server." },
    { code: 204, title: "No Content", desc: "Request successful, but no content to return." },
    { code: 205, title: "Reset Content", desc: "Client should reset the form/view that submitted the request." },
    { code: 206, title: "Partial Content", desc: "Only part of the resource was returned, due to a range request." },
    { code: 207, title: "Multi-Status (WebDAV)", desc: "Multiple operations' results are described in the body." },
    { code: 208, title: "Already Reported (WebDAV)", desc: "Resource mentioned earlier in the response." },
    { code: 226, title: "IM Used", desc: "Response is result of one or more instance-manipulations." },
    { code: 300, title: "Multiple Choices", desc: "The request has more than one possible response." },
    { code: 301, title: "Moved Permanently", desc: "Resource permanently moved to a new URI." },
    { code: 302, title: "Found", desc: "Resource temporarily moved to a different URI." },
    { code: 303, title: "See Other", desc: "Resource can be found at another URI using GET." },
    { code: 304, title: "Not Modified", desc: "Resource not modified. Use cached version." },
    { code: 305, title: "Use Proxy (Deprecated)", desc: "Must access the resource through a proxy." },
    { code: 306, title: "(Unused)", desc: "Reserved but not used anymore." },
    { code: 307, title: "Temporary Redirect", desc: "Resource temporarily moved, same method to be used." },
    { code: 308, title: "Permanent Redirect", desc: "Resource permanently moved, same method to be used." },
    { code: 400, title: "Bad Request", desc: "Server couldn't understand the request due to invalid syntax." },
    { code: 401, title: "Unauthorized", desc: "Request requires authentication." },
    { code: 402, title: "Payment Required", desc: "Reserved for future use, mainly for digital payments." },
    { code: 403, title: "Forbidden", desc: "Client does not have access rights to the content." },
    { code: 404, title: "Not Found", desc: "Server can’t find the requested resource." },
    { code: 405, title: "Method Not Allowed", desc: "Request method is known but not supported for the resource." },
    { code: 406, title: "Not Acceptable", desc: "Requested content not acceptable per Accept headers." },
    { code: 407, title: "Proxy Authentication Required", desc: "Client must authenticate with the proxy." },
    { code: 408, title: "Request Timeout", desc: "Client didn’t send full request in time." },
    { code: 409, title: "Conflict", desc: "Conflict with current resource state." },
    { code: 410, title: "Gone", desc: "Requested resource is permanently gone." },
    { code: 411, title: "Length Required", desc: "Content-Length header is missing." },
    { code: 412, title: "Precondition Failed", desc: "Server does not meet request preconditions." },
    { code: 413, title: "Request Entity Too Large", desc: "Request is too large for the server to handle." },
    { code: 414, title: "Request-URI Too Long", desc: "URI too long for server to process." },
    { code: 415, title: "Unsupported Media Type", desc: "Media type is not supported." },
    { code: 416, title: "Requested Range Not Satisfiable", desc: "Cannot fulfill the range specified." },
    { code: 417, title: "Expectation Failed", desc: "Server can't meet expectations in request headers." },
    { code: 418, title: "I'm a teapot", desc: "RFC joke code. Not expected to be implemented." },
    { code: 420, title: "Enhance Your Calm (Twitter)", desc: "Client is being rate-limited." },
    { code: 422, title: "Unprocessable Entity", desc: "Request is syntactically correct but can't be processed." },
    { code: 423, title: "Locked", desc: "Resource is locked." },
    { code: 424, title: "Failed Dependency", desc: "Request failed because of another request failure." },
    { code: 425, title: "Too Early", desc: "Server unwilling to risk replay attack." },
    { code: 426, title: "Upgrade Required", desc: "Client must upgrade to another protocol." },
    { code: 428, title: "Precondition Required", desc: "Request must be conditional." },
    { code: 429, title: "Too Many Requests", desc: "Rate limit exceeded." },
    { code: 431, title: "Request Header Fields Too Large", desc: "Header fields too large to process." },
    { code: 444, title: "No Response (Nginx)", desc: "Server returns nothing and closes connection." },
    { code: 449, title: "Retry With (Microsoft)", desc: "Retry the request after taking proper action." },
    { code: 450, title: "Blocked by Windows Parental Controls", desc: "Blocked by parental control settings." },
    { code: 451, title: "Unavailable For Legal Reasons", desc: "Resource cannot be legally provided." },
    { code: 499, title: "Client Closed Request (Nginx)", desc: "Client closed the connection before server responded." },
    { code: 500, title: "Internal Server Error", desc: "Unexpected server error." },
    { code: 501, title: "Not Implemented", desc: "Server doesn't support the request method." },
    { code: 502, title: "Bad Gateway", desc: "Invalid response from upstream server." },
    { code: 503, title: "Service Unavailable", desc: "Server not ready to handle request." },
    { code: 504, title: "Gateway Timeout", desc: "Upstream server did not respond in time." },
    { code: 505, title: "HTTP Version Not Supported", desc: "Server doesn't support the HTTP version used." },
    { code: 506, title: "Variant Also Negotiates", desc: "Configuration error due to nested negotiation." },
    { code: 507, title: "Insufficient Storage", desc: "Server can’t store the representation to complete request." },
    { code: 508, title: "Loop Detected", desc: "Server detected infinite loop." },
    { code: 510, title: "Not Extended", desc: "Further extensions required to fulfill request." },
    { code: 511, title: "Network Authentication Required", desc: "Client must authenticate to access network." },
  ];

  const container = document.querySelector(".card-container");
  codes.forEach(({ code, title, desc }) => {
    const div = document.createElement("div");
    const series = Math.floor(code / 100);
    div.className = "flip-card";
    div.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front status-${series}xx">
          <div>${code}</div>
          <div>${title}</div>
        </div>
        <div class="flip-card-back status-${series}xx">
          ${desc}
        </div>
      </div>
    `;
    container.appendChild(div);
  });
</script>
<!-- END: HTTP Status Code Flip Cards -->
