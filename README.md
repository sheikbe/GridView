# GridView

This repository contains two separate projects: `gridview-web` and `gridview-app`.

## gridview-web

The `gridview-web` project is a React frontend application that replaces the previous ASP.NET Web Forms GridView control. It is built using Gradle and can be deployed as a separate NGINX module.

### Building and Deploying the React Frontend

To build and deploy the React frontend using Gradle, follow these steps:

1. Navigate to the `gridview-web` directory:
   ```sh
   cd gridview-web
   ```

2. Install the necessary dependencies:
   ```sh
   npm install
   ```

3. Build the React frontend:
   ```sh
   npm run build
   ```

4. Deploy the React frontend to OpenShift:
   ```sh
   gradle deploy
   ```

## gridview-app

The `gridview-app` project is a Spring Boot backend application that replaces the previous .NET backend code. It is built using Gradle and can be deployed as a deployable unit to the OpenShift container platform.

### Building and Deploying the Spring Boot Backend

To build and deploy the Spring Boot backend using Gradle, follow these steps:

1. Navigate to the `gridview-app` directory:
   ```sh
   cd gridview-app
   ```

2. Build the Spring Boot backend:
   ```sh
   gradle build
   ```

3. Generate the JAR file:
   ```sh
   gradle jar
   ```

4. Deploy the Spring Boot backend to OpenShift:
   ```sh
   gradle deploy
   ```

## Testing

### React Frontend

The React frontend includes unit test cases and end-to-end test cases using Cypress. The test coverage should be a minimum of 85%.

### Spring Boot Backend

The Spring Boot backend includes unit test cases using JUnit and Mockito. It also integrates test cases using Spring Boot test, API smoke tests, and critical testing using Rest Assured. The test coverage should be a minimum of 85%.

## Test Plan

A detailed test plan is provided in the `test-plan.md` file. It includes test cases for unit tests, integration tests, and end-to-end tests for both the React and Spring Boot applications.
