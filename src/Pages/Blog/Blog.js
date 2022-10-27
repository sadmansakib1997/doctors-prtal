import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="text-center fw-bold">This is Blog Site</div>

      <div className="ms-3">
        <div>
          <h2>.1 what is cors?</h2>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources
          </p>
        </div>
        <div>
          <h2>
            2.Why are you using firebase?What other options do you have to
            implement authentication?
          </h2>
          <p>
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience. <br />* Usually, authentication by a server entails the
            use of a user name and password. Other ways to authenticate can be
            through cards, retina scans, voice recognition, and fingerprints.
          </p>
        </div>
        <div>
          <h2>.3 How does the private route work?</h2>
          <p>
            The react private route component renders child components
            (children) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property. The current logged in user (authUser) is
            retrieved from Redux state with a call to the useSelector() hook.
            Redux is used in this example however it is not required to
            implement a Private Route component in React Router 6. You could use
            a different state management library or any approach you prefer to
            get the logged in status of the user.
          </p>
        </div>
        <div>
          <h2>.4 What is Node? How does Node work?</h2>
          <p>
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. Working of Node.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
