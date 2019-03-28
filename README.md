---
title: Intro and Overview of FeathersJS
revealOptions:
    transition: 'zoom'
---

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/v26zyfd6yf0r33s46vpe.tablet.mp4" data-background-video-loop="loop" data-background-video-muted -->

### Intro and Overview
#### of
<img src="https://cdn-images-1.medium.com/max/1200/1*2TDREss7Pa_F5Z6CsHeD_w.jpeg" style="height:200px;width:auto;">

cj@null.computer

https://w3cj.sh

cj on Denver Devs Slack

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/52vy4yxt8yw76d2u8dsm.tablet.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg fragment">
  Hello friends! <span class="emoji">👋</span>
  My name is <span class="red">CJ <span class="emoji">👽</span></span>.
</div>

<div class="dark-bg fragment">
  I am a <strong>Full Stack Developer <span class="emoji">🥞</span></strong>,
  <strong>Educator <span class="emoji">🏫</span></strong>, and
  <strong>Maker <span class="emoji">🛠</span>
</div>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/c8t92d7m4t5w4af4gmnc.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  I have worn many <span class="emoji">🎩</span>s in my career including <strong>Instructor <span class="emoji">👨‍🏫</span></strong>, <strong>Software Engineer <span class="emoji">🚂</span></strong>, <strong>QA Analyst <span class="emoji">🚨</span></strong>, <strong>System Administrator <span class="emoji">🔥</span></strong>, and <strong>Help Desk Consultant <span class="emoji">⛑</span></strong>.
</div>

---

<!-- .slide: data-background="https://i.imgur.com/GJODR3r.jpg"  -->

<div class="dark-bg">
  <h3>Lead Full Stack Developer</h3>
  <h2>at</h2>
  <img src="https://303.sh/logo.svg" style="height:100px;width:auto;">
</div>

---

### Coding Garden with CJ

YouTube.com/c/CodingGardenWithCJ

<img src="https://i.ytimg.com/vi/JnEH9tYLxLk/maxresdefault.jpg" style="max-width:35%">
<img src="https://i.ytimg.com/vi/DGPfCT5dDQE/maxresdefault.jpg" style="max-width:35%">
<img src="https://i.ytimg.com/vi/kChBiDhdSVA/maxresdefault.jpg" style="max-width:35%">
<img src="https://i.imgur.com/cwvKyKN.png" style="max-width:35%">

---

<!-- .slide: data-background="https://i.imgur.com/WPiNCVH.png"  -->

<div class="dark-bg">
  I am a co-organizer of the Den<img src="https://i.imgur.com/4sgyzVl.png" class="vue-logo-small" />er <img src="https://i.imgur.com/4sgyzVl.png" class="vue-logo-small" />ue Meetup
</div>

<div class="dark-bg fragment mt">
  We are currently looking for food sponsors.
  We're always looking for full talk and lightning talk speakers.
</div>

---

# Who are you??

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/bbqzgcm54sbewywlcl1d.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Agenda</h2>
  <ul>
    <li>What is FeathersJS?</li>
    <li>Setup and Configuration</li>
    <li>Supported Transport Layers</li>
    <li>Services</li>
    <li>Data Adapters</li>
    <li>Authentication</li>
    <li>Hooks</li>
    <li>Feathers Client</li>
    <li>Events</li>
    <li>Ecosystem / Community</li>
  </ul>
</div>

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/de6w5hh1ijhzux3c3pah.tablet.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>What is FeathersJS?</h2>
</div>

----

Feathers is a batteries included but entirely optional minimal web application framework.

----

At its core, Feathers is a set of tools and an architecture pattern that make it easy to create scalable REST APIs and real-time applications. With Feathers, you can literally build prototypes in minutes and production-ready apps in days.

----

Feathers achieves this by being the glue code between some amazing battle-tested open-source technologies - adding a few minimal abstractions and introducing an application architecture that is easier to understand, maintain, and scale than the traditional MVC architecture.

----

David Luecke had the initial idea for something like FeathersJS in his 2010 thesis (written in Java)

>Instead of the typical MVC paradigm, he took aspect oriented programming patterns and settled on using services and cross cutting concerns, or “hooks”.

_Source: [Why we built the best web framework you’ve probably never heard of ](https://blog.feathersjs.com/why-we-built-the-best-web-framework-you-ve-probably-never-heard-of-until-now-176afc5c6aac)_

----

* Initial JS version was published to github in 2013.
* v1.0 was released in 2014.
* v2.0 was released in March 2016.
* Current version is 3.3.1.

----

## Feathers vs X

* https://feathersjs.com/comparison

----

## To the [Docs](https://docs.feathersjs.com/)!

---

<!-- .slide: data-background-video="https://flixels.s3.amazonaws.com/flixel/3uvqg0wiaxbi5blj9qda.webm" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Setup and Configuration</h2>
</div>

----

The Feathers CLI allows us to initialize a new Feathers application with a recommended structure. It also helps with

* Configuring authentication
* Generating database backed services
* Setting up database connections
* Generating hooks (with tests)
* Adding Express middleware

----

Install the CLI globally.

```sh
npm install @feathersjs/cli -g
```

----

Generate an app.

```sh
mkdir my-feathers-app
cd my-feathers-app
feathers generate app
```

---

<!-- .slide: data-background-video="https://flixels.s3.amazonaws.com/flixel/sjytbnalz6tpbgl9jqzn.webm" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Supported Transport Layers</h2>
</div>

----

* Express (RESTful API)
* Socket.io (websockets)
* Primus (websockets)

---

<!-- .slide: data-background-video="https://flixels.s3.amazonaws.com/flixel/e7n04jknemzalm6lkaev.webm" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Services</h2>
</div>

----

Services are the heart of every Feathers application and are JavaScript objects or instances of a class that implement certain methods.

----

Services provide a uniform, protocol independent interface for how to interact with any kind of data like:

* Reading and/or writing from a database
* Interacting with the file system
* Call another API
* Call other services like
  * Sending an email
  * Processing a payment
  * Returning the current weather for a location, etc.

----

Protocol independent means that to a Feathers service it does not matter if it has been called internally, through a REST API or websockets or any other way.

----

Service methods are CRUD methods that a service object can implement.

----

Feathers service methods are:

* find - Find all data (potentially matching a query)
* get - Get a single data entry by its unique identifier
* create - Create new data
* update - Update an existing data entry by completely replacing it
* patch - Update one or more data entries by merging with the new data
* remove - Remove one or more existing data entries

----

Generate a service:

```sh
feathers generate service
```

---

<!-- .slide: data-background-video="https://flixels.s3.amazonaws.com/flixel/n6rqxpk9g9ts0upfbzal.webm" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Data Adapters</h2>
</div>

----

Feathers database adapters are modules that provide services that implement standard CRUD functionality for a specific database using a common API for initialization and settings and providing a common query syntax.

>See [docs](https://docs.feathersjs.com/api/databases/adapters.html) for all supported adapters.

---

<!-- .slide: data-background-video="https://cdn.flixel.com/flixel/01tiqtvxpvy1qzjugnav.hd.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Authentication</h2>
</div>

----

The `@feathersjs/authentication` module assists in using JWT for authentication.

----

It has three primary purposes:

* Setup an /authentication endpoint to create JSON Web Tokens (JWT). JWT are used as access tokens.
* Provide a consistent authentication API for all Feathers transports
* Provide a framework for authentication plugins that use Passport strategies to protect endpoints.

----

Generate authentication:

```sh
feathers generate authentication
```

---

<!-- .slide: data-background-video="https://flixels.s3.amazonaws.com/flixel/jjihphnwquisxx0xyxtg.webm" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Hooks</h2>
</div>

----

Hooks are pluggable middleware functions that can be registered before, after or on errors of a service method. You can register a single hook function or create a chain of them to create complex work-flows. Most of the time multiple hooks are registered so the examples show the "hook chain" array style registration.

----

A hook is transport independent, which means it does not matter if it has been called through HTTP(S) (REST), Socket.io, Primus or any other transport Feathers may support in the future. They are also service agnostic, meaning they can be used with ​any​ service regardless of whether they have a model or not.

----

Hooks are commonly used to handle things like validation, logging, populating related entities, sending notifications and more. This pattern keeps your application logic flexible, composable, and much easier to trace through and debug.

---


<!-- .slide: data-background-video="https://flixels.s3.amazonaws.com/flixel/etkm6cv4mvwc18qejgl3.webm" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h2>Feathers Client</h2>
</div>

----

One of the most notable features of Feathers is that it can also be used as the client. In contrast with most other frameworks, it isn't a separate library; instead you get the exact same functionality with a client and on a server. This means you can use services and hooks and configure plugins. By default, a Feathers client automatically creates services that talk to a Feathers server.

----

```js
import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

const socket = io('http://api.my-feathers-server.com', {
  transports: ['websocket'],
  forceNew: true
});
const client = feathers();

client.configure(socketio(socket));

const messageService = client.service('messages');

messageService.on('created', message => console.log('Created a message', message));

// Use the messages service from the server
messageService.create({
  text: 'Message from client'
});
```

---

<!-- .slide: data-background-video="https://flixels.s3.amazonaws.com/flixel/z9wcm9tw5ao9m4w95ysl.webm" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <h3>Ecosystem / Community</h3>
</div>

----

* [FAQ](https://docs.feathersjs.com/faq/readme.html)
* [Feathers Blog](https://blog.feathersjs.com/)
* [Feathers Slack](http://slack.feathersjs.com/)
* [Awesome Feathers](https://github.com/feathersjs/awesome-feathersjs)

---

<!-- .slide: data-background-video="https://media.giphy.com/media/3ohs7JG6cq7EWesFcQ/giphy.mp4" data-background-video-loop="loop" data-background-video-muted -->

<div class="dark-bg">
  <p>Slides are at https://git.io/intro-feathers</p>
  <p>cj@null.computer</p>
  <p>https://git.io/w3cj</p>
  <p>https://w3cj.sh</p>
  <p>cj on Denver Devs Slack</p>
</div>

---
