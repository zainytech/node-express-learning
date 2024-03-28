## First commit
In first commit you'll learn
- how to setup the node js enviornment in your system
- difference between node and browser
- no document.anyquery or window object and DOM in node
- How to export modules in node using require method
- every js file serves as a module by default
- some built-in modules like OS (operating System) , path
  - OS built in module help us to get info related to our operating system like uptime, memory, release Time etc.
  - Path built-in module helps us to get automatic directories of some files cuz in different computers the path of system to the file differs according to different users.

## Second Commit
In second commit you'll learn
- what is fs(filesystem) built-in module
  - we can use fs to read existing files and write to a new file.
  - There are 2 approaches to do read and write or any task in js, synchronous and asynchronous.
    - in **synchronous approach** there is no callback function, its blocking approach.
    - in **asynchronous approach** there is a callback function that provides us error message or result and its a non-blocking approach.

## Third Commit
In third commit you'll learn
- What is http built-in module.
  - We use http module to setup a web server for our project.
  - Express is used as its reciprocal but to understand bases we'll use http.
- What are **npm (packages/modules/dependencies)**
  - These are reusable javascript code snippets for multiple developers for the ease of not doing hard work again and again.
  - All the npm packages are available on npmjs.com, on this website ppl can share or download the packages.
  - Some npm packages can be installed locally and some globbaly on your machine.
  - To install globaly means theyu will be available for all of your projects (command: npm -g [packagename])
  - To install locally means only available for that specific project (command: npm i [packagename])

## Fourth Commit
In fourth commit you'll learn
- What is package.json file and npm commands
  - Package.json file stores important info about your project like packages/dependencies installed for project etc (command: npm init -y).
  - In installing packages/dependencies you can install some of them as dev dependencies or simple local dependencies.
  - For installing dev dependencies just add -D at the end of installing command (npm i nodemon -D)
  - We use nodemon as dev dependency to use it for production purposes, it will automatically restart your server instead of restarting again and again after every changes made while using node for production.
  - You can add any run command in "script" object of package.json such as by setting "start":"node index.js", whenever you will run command [npm run start] it will run [node index.js] automatically, no need to write whole node index.js thing again and again.
  - Folder named "node modules" is not the folder to be copied to anywhere, just use command [npm install] in any project where no "node modules" present, it will install all the packages with the desired versions written in package.json file automatically.
  - Ctrl+C to terminate any command's work in process.
  - npm uninstall [packagename] to uninstall the package from your project.

## Fifth Commit
In fifth commit you'll learn 
- What is Event Loop
  - It's a mechanism that handles multiple requests (asynchronous/synchronous) from the clients to give a quick and non-loading response back from the server.
      - Non-Blocking I/O: When your code makes an asynchronous request (like reading a file or making a network call), the event loop doesn't wait for it to finish. Instead, it sends the request to the operating system and moves on.
      - Event Queues: The operating system handles these requests in the background. Once one is complete, it sends a notification (event) back to Node.js. This notification is placed in a queue based on its priority.
      - Processing Events: The event loop constantly checks these queues. When the call stack (where your code is executed) is empty, the event loop pulls the next event from the highest priority queue and executes its associated callback function.
  - 
