# Technologies Description

This document have the objective to describe what technologies are used in this project and it's motivation.

**DISCLAIMER:** This list can and should be modified during the development of this project by means of necessity.

## General Communication protocol

- **GraphQL:** GraphQL is a simple solution for fetching data from the server without using too much requests and without going for the BFF pattern. With proper technology, the backend schema can be modified and validated on frontend, make it a suitable and secure choice to build a typesafe distributed application.

## Type System

- **Typescript:** To ensure the application gonna works as expected and catch any javascript bugs due to undefined variables or implicit conversions, Typescript is absolutely necessary for it. Application can grow more robust and reliable.

## Front-End

- **React:** React is a modern front-end library to handle any sort of reactive UI complexity. Gonna be used because Relay is a GraphQL fetching for React;
- **Next.js:** Nowadays, with React docs update, there are default recommendations of frameworks to work with React. I gonna use the default recommmendation, which is Next.Js, to learn and speed up development and use it's optimizations capabilities;
- **Relay:** Relay is the Meta's solution for GraphQL on frontend. Also, the GraphQL specification was provided by Meta. Relay can handle a heavy data driven frontend which uses GraphQL and it really shines by providing the data requirements of every component;
- **Radix:** An agnostic design system who provides pre-built UI components unstyled, for faster development of UI;
- **Tailwind:** A post-processing CSS library for faster development. It helps in the finishing of components under Radix.

## Back-End

For all microsservices that are necessary for this project, the same back-end technologies gonna be used:

- **Node.Js:** Javascript runtime with a good range of functionalities, emphasizing almost reactive I/O capabilities and the possibility to use Js on backend and frontend;
- **Fastify:** A better HTTP Server framework, faster than Express and a good option to use in backend;
- **GraphQL-Helix:** A framework agnostic GraphQL over HTTP framework, which makes simple to open a graphql endpoint and publish any schema;
- **GraphQL.Js:** GraphQL library, necessary for defining schemas, types and resolvers;
- **Prisma ORM:** ORM library, that makes the database access and communication more simple. Database modelling is more simple too;
- **Auth.js:** Authorization library, to handle user authentication/authorization.

## Database

For all microsservices that are necessary for this project, the same DBMS gonna be used:

- **PostgreSQL:**
