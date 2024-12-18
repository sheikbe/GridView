package com.example.GridViewCS;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.hamcrest.Matchers.equalTo;

public class ApiCriticalTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "http://localhost:8080";
    }

    @Test
    public void testCreateCustomer() {
        String customerJson = "{ \"customerID\": 3, \"companyName\": \"Company C\", \"firstName\": \"Alice\", \"lastName\": \"Johnson\" }";
        Response response = RestAssured.given()
                .header("Content-Type", "application/json")
                .body(customerJson)
                .post("/api/customers");
        response.then().statusCode(201)
                .body("customerID", equalTo(3));
    }

    @Test
    public void testUpdateCustomer() {
        String customerJson = "{ \"customerID\": 1, \"companyName\": \"Updated Company\", \"firstName\": \"John\", \"lastName\": \"Doe\" }";
        Response response = RestAssured.given()
                .header("Content-Type", "application/json")
                .body(customerJson)
                .put("/api/customers/1");
        response.then().statusCode(204);
    }

    @Test
    public void testCreateOrder() {
        String orderJson = "{ \"orderID\": 3, \"customerID\": 1, \"orderDate\": \"2023-01-01\", \"totalAmount\": 150.00 }";
        Response response = RestAssured.given()
                .header("Content-Type", "application/json")
                .body(orderJson)
                .post("/api/orders");
        response.then().statusCode(201)
                .body("orderID", equalTo(3));
    }

    @Test
    public void testUpdateOrder() {
        String orderJson = "{ \"orderID\": 1, \"customerID\": 1, \"orderDate\": \"2023-01-01\", \"totalAmount\": 200.00 }";
        Response response = RestAssured.given()
                .header("Content-Type", "application/json")
                .body(orderJson)
                .put("/api/orders/1");
        response.then().statusCode(204);
    }
}
