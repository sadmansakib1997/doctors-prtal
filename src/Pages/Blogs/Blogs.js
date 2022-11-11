import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="mx-5 my-8">
        <h1 className="text-6xl font-semibold">
          1.Difference between SQL and NoSQL?
        </h1>
        <p className="text-2xl">
          ans: SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
        <br />
        <h1 className="text-6xl font-semibold">
          2.What is JWT, and how does it work?
        </h1>
        <p className="text-2xl">
          ans: JSON Web Token is an open industry standard used to share
          information between two entities, usually a client (like your app’s
          frontend) and a server (your app’s backend). They contain JSON objects
          which have the information that needs to be shared. Each JWT is also
          signed using cryptography (hashing) to ensure that the JSON contents
          (also known as JWT claims) cannot be altered by the client or a
          malicious party.
        </p>
        <br />
        <h1 className="text-6xl font-semibold">
          3.What is the difference between javascript and NodeJS?
        </h1>
        <p className="text-2xl">
          ans: JavaScript is a simple programming language that can be used with
          any browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
        <br />
        <h1 className="text-6xl font-semibold">
          4.How does NodeJS handle multiple requests at the same time?
        </h1>
        <p className="text-2xl">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
