package com.example.GridViewCS;

import com.example.GridViewCS.Models.Order;
import com.example.GridViewCS.Services.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class OrderServiceTest {

    @Mock
    private List<Order> mockOrderList;

    @InjectMocks
    private OrderService orderService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockOrderList = Arrays.asList(
                new Order(1, 1, "2022-01-01", 100.00),
                new Order(2, 2, "2022-01-02", 200.00)
        );
    }

    @Test
    public void testGetOrders() {
        when(orderService.getOrders()).thenReturn(mockOrderList);

        List<Order> orders = orderService.getOrders();
        assertEquals(2, orders.size());
        verify(orderService, times(1)).getOrders();
    }

    @Test
    public void testGetOrderById() {
        Order order = new Order(1, 1, "2022-01-01", 100.00);
        when(orderService.getOrderById(1)).thenReturn(order);

        Order result = orderService.getOrderById(1);
        assertEquals(order, result);
        verify(orderService, times(1)).getOrderById(1);
    }

    @Test
    public void testCreateOrder() {
        Order order = new Order(3, 3, "2022-01-03", 300.00);
        doNothing().when(orderService).createOrder(order);

        orderService.createOrder(order);
        verify(orderService, times(1)).createOrder(order);
    }

    @Test
    public void testUpdateOrder() {
        Order order = new Order(1, 1, "2022-01-01", 100.00);
        doNothing().when(orderService).updateOrder(order);

        orderService.updateOrder(order);
        verify(orderService, times(1)).updateOrder(order);
    }
}
