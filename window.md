Windows Object


The Window Object:
The Window object represents the browser window or a tab in which a web page is loaded. It is the topmost object in the browser's JavaScript hierarchy and serves as the global object for JavaScript code running in the browser.

Key Points:
1. Global Scope:
   - The Window object is the global scope for JavaScript code running in the browser.
   - Any variables or functions declared globally (outside any function) become properties and methods of the Window object.

   Example:
   ```javascript
   var globalVar = "I am a global variable";
   function globalFunc() {
     console.log("I am a global function");
   }
   console.log(window.globalVar); // Output: I am a global variable
   window.globalFunc(); // Output: I am a global function
   ```

2. Browser Window Properties:
   - The Window object provides properties to access information about the browser window.
   - Some commonly used properties include:
     - `window.innerWidth`: Returns the width of the browser window's viewport.
     - `window.innerHeight`: Returns the height of the browser window's viewport.
     - `window.location`: Represents the current URL of the web page.
     - `window.document`: Represents the HTML document loaded in the window.

   Example:
   ```javascript
   console.log(window.innerWidth); // Output: Width of the browser window
   console.log(window.location.href); // Output: Current URL of the web page
   ```

3. Browser Window Methods:
   - The Window object provides methods to interact with the browser window.
   - Some commonly used methods include:
     - `window.open()`: Opens a new browser window or tab.
     - `window.alert()`: Displays an alert dialog box with a message.
     - `window.confirm()`: Displays a confirmation dialog box with a message and returns a boolean value.
     - `window.prompt()`: Displays a prompt dialog box that allows the user to enter a value.
     - `window.history`: Provides methods to navigate through the browser's history.
     - `window.location`: Allows redirection to a new URL.

   Example:
   ```javascript
   window.open("https://www.example.com", "_blank", "width=400, height=300");
   window.alert("This is an alert message!");
   var result = window.confirm("Are you sure you want to proceed?");
   var name = window.prompt("Please enter your name:");
   window.history.back(); // Go back to the previous page
   window.location.href = "https://www.google.com"; // Redirect to Google
   ```

4. Event Handling:
   - The Window object is responsible for handling events that occur in the browser window.
   - You can attach event listeners to the Window object to respond to events such as `load`, `resize`, `scroll`, and `click`.

   Example:
   ```javascript
   window.addEventListener("load", function() {
     console.log("Page loaded!");
   });
   window.addEventListener("resize", function() {
     console.log("Window resized!");
   });
   ```

5. Browser APIs:
   - The Window object provides access to various browser APIs.
   - Some commonly used APIs include:
     - Document Object Model (DOM) API: Allows manipulation of the web page's structure and content.
     - XMLHttpRequest API: Enables asynchronous requests to servers.
     - Web Storage API: Provides methods to store data in the browser.

   Example:
   ```javascript
   // DOM API
   var element = document.getElementById("myElement");
   element.textContent = "Hello, World!";

   // XMLHttpRequest API
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "https://api.example.com/data", true);
   xhr.onload = function() {
     if (xhr.status === 200) {
       console.log(xhr.responseText);
     }
   };
   xhr.send();

   // Web Storage API
   localStorage.setItem("username", "John");
   var username = localStorage.getItem("username");
   console.log(username); // Output: John
   ```

