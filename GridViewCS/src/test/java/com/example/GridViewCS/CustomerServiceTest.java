package com.example.GridViewCS;

import com.example.GridViewCS.Models.Customer;
import com.example.GridViewCS.Services.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class CustomerServiceTest {

    @Mock
    private List<Customer> mockCustomerList;

    @InjectMocks
    private CustomerService customerService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockCustomerList = Arrays.asList(
                new Customer(1, "Company A", "John", "Doe"),
                new Customer(2, "Company B", "Jane", "Smith")
        );
    }

    @Test
    public void testGetCustomers() {
        when(customerService.getCustomers()).thenReturn(mockCustomerList);

        List<Customer> customers = customerService.getCustomers();
        assertEquals(2, customers.size());
        verify(customerService, times(1)).getCustomers();
    }

    @Test
    public void testGetCustomerById() {
        Customer customer = new Customer(1, "Company A", "John", "Doe");
        when(customerService.getCustomerById(1)).thenReturn(customer);

        Customer result = customerService.getCustomerById(1);
        assertEquals(customer, result);
        verify(customerService, times(1)).getCustomerById(1);
    }

    @Test
    public void testCreateCustomer() {
        Customer customer = new Customer(3, "Company C", "Alice", "Johnson");
        doNothing().when(customerService).createCustomer(customer);

        customerService.createCustomer(customer);
        verify(customerService, times(1)).createCustomer(customer);
    }

    @Test
    public void testUpdateCustomer() {
        Customer customer = new Customer(1, "Company A", "John", "Doe");
        doNothing().when(customerService).updateCustomer(customer);

        customerService.updateCustomer(customer);
        verify(customerService, times(1)).updateCustomer(customer);
    }
}
