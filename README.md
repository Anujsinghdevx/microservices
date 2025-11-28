# MICROSERVICES

Unleash Innovation, Power Seamless Microservice Collaboration_


![Last Commit](https://img.shields.io/github/last-commit/Anujsinghdevx/microservices)
![Languages](https://img.shields.io/github/languages/top/Anujsinghdevx/microservices?color=blue)
![TypeScript](https://img.shields.io/badge/TypeScript-96.5%25-blue?logo=typescript)

Built with the tools and technologies:

![Express](https://img.shields.io/badge/Express-black?logo=express)
![JSON](https://img.shields.io/badge/JSON-black?logo=json)
![npm](https://img.shields.io/badge/npm-red?logo=npm)
![.ENV](https://img.shields.io/badge/.ENV-lightgrey)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)
![Nodemon](https://img.shields.io/badge/Nodemon-green?logo=nodemon)
![Docker](https://img.shields.io/badge/Docker-blue?logo=docker)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma)
![Axios](https://img.shields.io/badge/Axios-5A29E8?logo=axios)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest)



## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Overview

Microservices is a robust framework for developing scalable, interconnected microservice architectures. It integrates authentication, user management, micro, and edge services, all orchestrated through a centralized API Gateway. The project emphasizes maintainability, security, and efficient data management, making it ideal for complex system development.

### Why microservices?

This project simplifies building and managing multi-service ecosystems with features like:

- **Modular Architecture**: Seamlessly connect multiple services with shared resources and configurations.
- **Automated Database Setup**: Included schemas and Prisma integration ensure scalable data storage.
- **API Gateway**: Centralized routing, request validation, and security for reliable client-server interactions.
- **Comprehensive Testing**: Dedicated environments for each service promise high code quality.
- **Shared Utilities & Middleware**: Standardized request handling, validation, and environment management.

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language**: Typescript
- **Package Manager**: NPM
- **Container Runtime**: Docker

### Installation

Build microservices from the source and install dependencies:

1. Clone the repository:

    ```bash
    git clone https://github.com/Anujsinghdevx/microservices
    ```

2. Navigate to the project directory:

    ```bash
    cd microservices
    ```

3. Install the dependencies:

    Using **Docker**:

    ```bash
    docker build -t Anujsinghdevx/microservices .
    ```

    Using **NPM**:

    ```bash
    npm install
    ```

### Usage

Run the project with:

Using **Docker**:

```bash
docker run -d -p 8080:8080 username/microservices
```

Using **NPM**:

```bash
npm start
```

### Testing

Microservices uses the [jest_framework](https://jestjs.io/) test framework. Run the test suite with:

Using **Docker**:

```bash
docker run --rm username/microservices npm run test
```

Using **NPM**:

```bash
npm test
```


