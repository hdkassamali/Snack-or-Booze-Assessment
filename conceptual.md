### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  
  React Router lets you handle different URLs in your app without reloading the page. It's basically how you navigate between different screens while keeping that smooth single-page app feel.

- What is a single page application?
  
  It's a website that loads once and then updates content dynamically without full page reloads. Think Gmail or Facebook - you click around but the page never actually refreshes completely.

- What are some differences between client side and server side routing?
  
  Client-side routing happens entirely in the browser with JavaScript handling URL changes without server requests. Server-side routing means each new URL triggers a full server request and page reload, which is slower but better for SEO out of the box.

- What are two ways of handling redirects with React Router? When would you use each?
  
  You can use the <Redirect> component when you need to redirect during rendering, like for protected routes. For redirecting after events (like form submissions), you'd use the history.push() or useNavigate() hook.

- What are two different ways to handle page-not-found user experiences using React Router? 
  
  You can catch all unmatched routes with a wildcard path="*" at the end of your routes that renders a 404 component. Another way is using a Switch/Routes component that only renders the first matching route, with your 404 component as the last route.

- How do you grab URL parameters from within a component using React Router?
  
  Use the useParams() hook to grab them in functional components. It's super easy - just destructure whatever params you defined in your route path.

- What is context in React? When would you use it?
  
  Context is React's way of passing data through your component tree without prop drilling. Use it when you have "global" data that many components need, like user authentication or theme settings.

- Describe some differences between class-based components and function components in React.
  
  Class components use lifecycle methods and this.state while function components use hooks and are generally more concise. Function components are the modern approach and usually lead to cleaner, more reusable code.

- What are some of the problems that hooks were designed to solve?
  
  Hooks solved the mess of sharing stateful logic between components without render props or HOCs. They also eliminated the confusion around this keyword and let you reuse stateful logic without changing your component hierarchy.