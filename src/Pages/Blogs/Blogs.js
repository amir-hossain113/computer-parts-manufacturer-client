import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10 mx-10 mt-10 mb-10">
      <div class="card w-full bg-base-100 shadow-xl border-dashed border-2 border-r-cyan-500 border-b-green-500">
        <div class="card-body">
          <h2 class="card-title">How will you improve the performance of a React Application?</h2>
          <p>If you follow these steps you will improve the performance of a react application:</p>
              <p>1. Using Immutable Data Structures</p>
              <p>2. Use React.Fragments to Avoid Additional HTML Element Wrappers</p>
              <p>3. Avoid Inline Function Definition in the Render Function.</p>
              <p>4. Avoid using Index as Key for map</p>
              <p>5. Avoiding Props in Initial States</p>
              <p>6. CSS Animations Instead of JS Animations</p>
              <p>7. Consider Server-side Rendering</p>
              <p>8. Use a Production build before deployment.</p>
              <p>9. Avoid Adding Extra Nodes to the DOM by using React. Fragment</p>
              <p>10. Immutable Data Structures</p>
              <p>11. Avoid Anonymous Functions</p>
              <p>12. App's loading time improvement by lazy loading</p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl border-dashed border-2 border-l-cyan-500 border-b-green-500">
        <div class="card-body">
          <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
          <p>There are four main types of state you need to properly manage in your React apps:</p>
              <li>Local state</li>
              <li>Global state</li>
              <li>Server state</li>
              <li>URL state</li>
          <p>
             <b>Local state: </b>Local state is data we manage in one or another component
          </p>
          <p>
             <b>Global state: </b>Global state is data we manage across multiple components.
          </p>
          <p>
              <b>Server state: </b>Data that comes from an external server that must be integrated with our UI state.
          </p>
          <p>
             <b>URL state: </b> Data that exists on our URLs, including the pathname and query parameters.
          </p>
          <p>Manage Local state in react:</p>
          <p>
          Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it. <br />
          useState is the first tool you should reach for to manage state in your components. <br />
          It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).
          </p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl border-double border-4 border-orange-500">
        <div class="card-body">
          <h2 class="card-title">How does prototypical inheritance work?</h2>
          <p>
          JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
          </p>
          <p>
          Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. <br />
          All JavaScript objects inherit properties and methods from a prototype:
          </p>
              <li>Date objects inherit from Date.prototype.</li>
              <li>Array objects inherit from Array.prototype.</li>
              <li>Player objects inherit from Player.prototype.</li>
          <p>
          The Object.prototype is on top of the prototype inheritance chain. Date objects, Array objects, and Player objects all inherit from Object.prototype.
          </p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl border-double border-4 border-orange-500">
        <div class="card-body">
          <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
          <p>
          UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
          </p>
          <p>
          Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
          </p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl border-dotted border-2 border-t-green-500 border-l-green-500">
        <div class="card-body">
          <h2 class="card-title"></h2>
          
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl border-dotted border-2 border-r-green-500 border-b-green-500">
        <div class="card-body">
          <h2 class="card-title">You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
