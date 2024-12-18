package com.example.GridViewCS;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.hamcrest.Matchers.equalTo;

public class ApiSmokeTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "http://localhost:8080";
    }

    @Test
    public void testGetCustomers() {
        Response response = RestAssured.get("/api/customers");
        response.then().statusCode(200);
    }

    @Test
    public void testGetCustomerById() {
        Response response = RestAssured.get("/api/customers/1");
        response.then().statusCode(200)
                .body("customerID", equalTo(1));
    }

    @Test
    public void testGetOrders() {
        Response response = RestAssured.get("/api/orders");
        response.then().statusCode(200);
    }

    @Test
    public void testGetOrderById() {
        Response response = RestAssured.get("/api/orders/1");
        response.then().statusCode(200)
                .body("orderID", equalTo(1));
    }
}
