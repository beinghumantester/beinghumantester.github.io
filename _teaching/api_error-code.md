---
title: "API HTTP Error Code"
collection: testing-musings
type: "Pairwise Testing"
permalink: /testing-musings/http-error-code-flashcards
venue: "API"
date: 2025-08-02
location: "HTTP Error Code"
---


  <style>
    body {
      font-family: sans-serif;
      background-color: #f8f9fa;
      padding: 20px;
    }

    .section {
      margin-bottom: 50px;
    }

    .section-title {
      font-size: 24px;
      font-weight: bold;
      border-left: 5px solid #333;
      padding-left: 10px;
      margin-bottom: 20px;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      width: 180px;
      height: 160px;
      perspective: 1000px;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .card:hover .card-inner {
      transform: rotateY(180deg);
    }

    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      color: white;
    }

    .card-back {
      transform: rotateY(180deg);
      font-size: 14px;
    }

    .yellow { background-color: #fbc02d; }
    .green { background-color: #4caf50; }
    .purple { background-color: #ab47bc; }
    .orange { background-color: #fb8c00; }
    .red { background-color: #e53935; }
  </style>

<body>

<script>
const statusCodes = [
  {code:100, text:'Continue', desc:'Server received request headers, client should proceed to send body.'},
  {code:101, text:'Switching Protocols', desc:'Client asked to switch protocols and server agreed.'},
  {code:102, text:'Processing', desc:'Server has received and is processing the request.'},
  {code:103, text:'Early Hints', desc:'Used to return some response headers before final HTTP message.'},
  {code:200, text:'OK', desc:'Standard response for successful HTTP requests.'},
  {code:201, text:'Created', desc:'Request has been fulfilled and new resource created.'},
  {code:202, text:'Accepted', desc:'Request has been accepted for processing, but not completed.'},
  {code:203, text:'Non-Authoritative Information', desc:'Returned meta-information from a third party.'},
  {code:204, text:'No Content', desc:'Request successful but no content to return.'},
  {code:205, text:'Reset Content', desc:'Tells client to reset document view.'},
  {code:206, text:'Partial Content', desc:'Partial content response due to range header.'},
  {code:207, text:'Multi-Status', desc:'WebDAV – multiple response codes.'},
  {code:208, text:'Already Reported', desc:'WebDAV – members already reported.'},
  {code:226, text:'IM Used', desc:'Request fulfilled using instance-manipulations.'},
  {code:300, text:'Multiple Choices', desc:'Multiple options for the resource.'},
  {code:301, text:'Moved Permanently', desc:'Resource moved to a new URL permanently.'},
  {code:302, text:'Found', desc:'Temporarily under different URL.'},
  {code:303, text:'See Other', desc:'Redirect using a GET method.'},
  {code:304, text:'Not Modified', desc:'Resource not modified since last request.'},
  {code:305, text:'Use Proxy', desc:'Deprecated – Use proxy specified in Location header.'},
  {code:307, text:'Temporary Redirect', desc:'Temporary redirect, same method used.'},
  {code:308, text:'Permanent Redirect', desc:'Resource moved permanently, same method used.'},
  {code:400, text:'Bad Request', desc:'Malformed syntax, request not understood.'},
  {code:401, text:'Unauthorized', desc:'Authentication required or failed.'},
  {code:402, text:'Payment Required', desc:'Reserved for future use.'},
  {code:403, text:'Forbidden', desc:'Server understood but refuses to authorize.'},
  {code:404, text:'Not Found', desc:'Requested resource not found.'},
  {code:405, text:'Method Not Allowed', desc:'Method not supported for requested resource.'},
  {code:406, text:'Not Acceptable', desc:'Resource can’t be served with acceptable values.'},
  {code:407, text:'Proxy Authentication Required', desc:'Authentication required with proxy.'},
  {code:408, text:'Request Timeout', desc:'Server timed out waiting for request.'},
  {code:409, text:'Conflict', desc:'Conflict in request, like edit conflicts.'},
  {code:410, text:'Gone', desc:'Resource no longer available.'},
  {code:411, text:'Length Required', desc:'Content-Length header required.'},
  {code:412, text:'Precondition Failed', desc:'Precondition in headers evaluated to false.'},
  {code:413, text:'Payload Too Large', desc:'Request entity too large.'},
  {code:414, text:'URI Too Long', desc:'Requested URI is too long.'},
  {code:415, text:'Unsupported Media Type', desc:'Unsupported format for request.'},
  {code:416, text:'Range Not Satisfiable', desc:'Requested range can’t be satisfied.'},
  {code:417, text:'Expectation Failed', desc:'Expectation in Expect header not met.'},
  {code:418, text:"I'm a teapot", desc:'Easter egg response from a teapot.'},
  {code:421, text:'Misdirected Request', desc:'Request sent to wrong server.'},
  {code:422, text:'Unprocessable Content', desc:'Semantic errors in request.'},
  {code:423, text:'Locked', desc:'Resource is locked.'},
  {code:424, text:'Failed Dependency', desc:'Dependent request failed.'},
  {code:425, text:'Too Early', desc:'Request too early to be processed safely.'},
  {code:426, text:'Upgrade Required', desc:'Client should switch protocols.'},
  {code:428, text:'Precondition Required', desc:'Server requires precondition headers.'},
  {code:429, text:'Too Many Requests', desc:'Client sent too many requests in a given time.'},
  {code:431, text:'Request Header Fields Too Large', desc:'Headers too large.'},
  {code:451, text:'Unavailable For Legal Reasons', desc:'Blocked due to legal reasons.'},
  {code:500, text:'Internal Server Error', desc:'Generic server error.'},
  {code:501, text:'Not Implemented', desc:'Server does not recognize method.'},
  {code:502, text:'Bad Gateway', desc:'Invalid response from upstream server.'},
  {code:503, text:'Service Unavailable', desc:'Server is down or overloaded.'},
  {code:504, text:'Gateway Timeout', desc:'Upstream server timeout.'},
  {code:505, text:'HTTP Version Not Supported', desc:'HTTP version not supported.'},
  {code:506, text:'Variant Also Negotiates', desc:'Content negotiation error.'},
  {code:507, text:'Insufficient Storage', desc:'WebDAV – server out of space.'},
  {code:508, text:'Loop Detected', desc:'Infinite loop in request.'},
  {code:510, text:'Not Extended', desc:'More extensions required to process.'},
  {code:511, text:'Network Authentication Required', desc:'Authentication needed to gain network access.'},
];

const colorClass = code => {
  if (code >= 100 && code < 200) return 'yellow';
  if (code >= 200 && code < 300) return 'green';
  if (code >= 300 && code < 400) return 'purple';
  if (code >= 400 && code < 500) return 'orange';
  return 'red';
};

const sectionTitle = code => {
  if (code >= 100 && code < 200) return '1xx Informational Codes';
  if (code >= 200 && code < 300) return '2xx Success Codes';
  if (code >= 300 && code < 400) return '3xx Redirection Codes';
  if (code >= 400 && code < 500) return '4xx Client Error Codes';
  return '5xx Server Error Codes';
};

let currentSection = '';
statusCodes.forEach(({ code, text, desc }) => {
  const section = sectionTitle(code);
  if (section !== currentSection) {
    document.write(`<div class="section"><div class="section-title">${section}</div><div class="card-container">`);
    currentSection = section;
  }
  document.write(`
    <div class="card">
      <div class="card-inner">
        <div class="card-front ${colorClass(code)}">
          <div><strong>${code}</strong><br>${text}</div>
        </div>
        <div class="card-back ${colorClass(code)}">
          ${desc}
        </div>
      </div>
    </div>
  `);
  const next = statusCodes.find(c => c.code > code);
  if (!next || sectionTitle(next.code) !== currentSection) {
    document.write(`</div></div>`);
  }
});
</script>

</body>
