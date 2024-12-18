# Test Plan for GridViewCS Project

## Introduction

This document outlines the test plan for the GridViewCS project. The project consists of a React front end and a Spring Boot back end. The front end is built using Gradle and deployed as a separate NGINX module on the OpenShift platform. The back end is built using Gradle, generates a JAR file, and is deployed as a deployable unit on the OpenShift container platform.

## Test Strategy

The testing strategy for the GridViewCS project includes the following types of tests:

1. Unit Tests
2. Integration Tests
3. End-to-End Tests
4. API Smoke Tests
5. API Critical Tests

## Test Coverage

The goal is to achieve a minimum of 85% test coverage for both the front end and back end code.

## Unit Tests

### Front End

- **Framework**: Jest
- **Components**: CustomerList, OrderList, CustomerForm, OrderForm
- **Location**: `GridViewCS/ClientApp/src/tests`

### Back End

- **Framework**: JUnit, Mockito
- **Services**: CustomerService, OrderService
- **Location**: `GridViewCS/src/test/java/com/example/GridViewCS`

## Integration Tests

### Front End

- **Framework**: Cypress
- **Location**: `GridViewCS/ClientApp/cypress/integration`

### Back End

- **Framework**: Spring Boot Test
- **Location**: `GridViewCS/src/test/java/com/example/GridViewCS`

## End-to-End Tests

### Front End

- **Framework**: Cypress
- **Location**: `GridViewCS/ClientApp/cypress/integration`

## API Tests

### Smoke Tests

- **Framework**: Rest Assured
- **Location**: `GridViewCS/src/test/java/com/example/GridViewCS`

### Critical Tests

- **Framework**: Rest Assured
- **Location**: `GridViewCS/src/test/java/com/example/GridViewCS`

## Test Execution

### Front End

1. **Unit Tests**: Run using Jest
2. **Integration Tests**: Run using Cypress
3. **End-to-End Tests**: Run using Cypress

### Back End

1. **Unit Tests**: Run using JUnit and Mockito
2. **Integration Tests**: Run using Spring Boot Test
3. **API Tests**: Run using Rest Assured

## Test Reporting

- **Front End**: Jest and Cypress provide test reports
- **Back End**: JUnit, Mockito, and Rest Assured provide test reports

## Conclusion

This test plan ensures comprehensive testing of the GridViewCS project, covering unit tests, integration tests, end-to-end tests, and API tests. The goal is to achieve a minimum of 85% test coverage for both the front end and back end code.
