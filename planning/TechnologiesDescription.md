# Technologies Description

This document have the objective to describe what technologies are used in this project and it's motivation.

**DISCLAIMER:** This list can and should be modified during the development of this project by means of necessity.

## General Communication protocol

- **GraphQL:** GraphQL is a simple solution for fetching data from the server without using too much requests and without going for the BFF pattern. With proper technology, the backend schema can be modified and validated on frontend, make it a suitable and secure choice to build a typesafe distributed application.

## Front-End

- **React:** React is a modern front-end library to handle any sort of reactive UI complexity. Gonna be used because Relay is a GraphQL fetching for React;
- **Relay:** Relay is the Meta's solution for GraphQL on frontend. Also, the GraphQL specification was provided by Meta. Relay can handle a heavy data driven frontend which uses GraphQL and it really shines by providing the data requirements of every component;
- **Radix:** An agnostic design system who provides pre-built UI components unstyled, for faster development of UI;
- **Tailwind:** A post-processing CSS library for faster development. It helps in the finishing of components under Radix.

## Back-End

For all microsservices that are necessary for this project, the same back-end technologies gonna be used:

- **Node.Js:**
- **Fastify:**
- **GraphQL-Helix:**
- **GraphQL.Js:**
- **Prisma ORM:**
- **Auth.js:**

## Database

For all microsservices that are necessary for this project, the same DBMS gonna be used:

- **PostgreSQL:**
