---
layout: page
title: AI Test Case Generator
permalink: /ai-projects/test-case-generator/
---


Here’s a clean, detailed `.md` page you can directly add to your portfolio. I’ve kept it simple, structured, and in your natural tone.

---

```md
---
title: Building My First AI Agent (and Breaking It)
description: Exploring AI agents using Ollama and understanding the gap between reasoning and execution
---

# Building My First AI Agent (and Breaking It)

While exploring AI agents and tools like Multica, I wanted to understand what actually happens behind the scenes instead of just using a polished UI. So I decided to build a very simple AI agent locally using Ollama.

The goal was straightforward: give a task, let the agent respond, and then execute something based on that response.

---

## The Setup

I created a basic Python script that:
- Takes user input
- Sends it to a local LLM (via Ollama)
- Prints the response
- Performs an action if a URL is detected

At this point, it was more of a "thinking + acting" loop rather than a full-fledged agent.

---

## The Task

I gave the agent this instruction:

> "Go to google.com and check all components on the website and write test case name for positive, negative and edge cases"

The response looked good:
- It returned the correct URL (`https://www.google.com`)
- It generated meaningful test cases
- Everything seemed to be working

---

## The Unexpected Behavior

After generating the response, the browser opened automatically.

But instead of opening Google, it opened a Bing search page with the **entire response as the search query**.

Something like:
```

Here is the URL: [https://www.google.com](https://www.google.com) ...

* full test case explanation

````

---

## What Went Wrong

The issue wasn’t with the model.

It was with my assumption.

I had written logic like:
```python
if "http" in output:
    webbrowser.open(output)
````

This meant I was passing the **entire AI response** to the browser instead of extracting just the URL.

The browser did exactly what it was told:

* It didn’t find a clean URL
* So it treated the whole thing as a search query

---

## Key Insight

AI responses are not structured by default.

They often include:

* Explanations
* Formatting (like markdown)
* Extra text around actual data

So if you directly use the output without processing it, things will break.

---

## The Fix

Instead of trusting the raw output, I added a parsing step:

```python
import re

def extract_url(text):
    match = re.search(r"https?://[^\s`]+", text)
    return match.group(0) if match else None
```

Now the flow became:

1. Get response from LLM
2. Extract only the URL
3. Pass clean URL to browser

---

## What This Taught Me

This small experiment helped clarify a big concept:

### AI is not execution, it is reasoning.

If you want real agent behavior, you need to separate:

* **Thinking (LLM)**
* **Action (code/tools)**

Without this separation:

* The agent "sounds correct"
* But behaves incorrectly

---

## Connecting This to Tools Like Multica

While tools like Multica provide a smooth UI for working with AI agents, this experiment helped me understand what’s happening underneath.

These systems are not just calling an LLM. They are:

* Structuring outputs
* Parsing responses
* Validating actions
* Managing workflows

What looks simple on the surface is actually a combination of multiple layers working together.

---

## From a Testing Perspective

This was a classic case of:

* **Valid-looking output**
* **Incorrect real-world behavior**

Some observations from a tester’s mindset:

* The system passed a functional check (response looked correct)
* But failed at integration level (action execution was wrong)
* Root cause was assumption-based logic, not model failure

---

## Final Thought

LLMs are powerful, but they don’t replace logic.

> LLM is the brain, but code is still the hands.

And if the hands don’t know exactly what to pick, even correct reasoning can lead to incorrect outcomes.

---

## What’s Next

I plan to extend this further by:

* Adding structured outputs (JSON instead of plain text)
* Introducing tool-based actions (file handling, API calls)
* Building a more reliable agent loop with validation

---

If you're experimenting with AI agents, start simple.
Break things. That’s where the real understanding comes from.

```

---

