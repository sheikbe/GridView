using System.Collections.Generic;
using GridViewCS.Models;

namespace GridViewCS.Services
{
    public class OrderService
    {
        private readonly List<Order> _orders;

        public OrderService()
        {
            _orders = new List<Order>
            {
                new Order { OrderID = 1, CustomerID = 1, OrderDate = DateTime.Now, TotalAmount = 100.00m },
                new Order { OrderID = 2, CustomerID = 2, OrderDate = DateTime.Now, TotalAmount = 200.00m }
            };
        }

        public IEnumerable<Order> GetOrders()
        {
            return _orders;
        }

        public Order GetOrderById(int id)
        {
            return _orders.Find(o => o.OrderID == id);
        }

        public void CreateOrder(Order order)
        {
            _orders.Add(order);
        }

        public void UpdateOrder(Order order)
        {
            var existingOrder = GetOrderById(order.OrderID);
            if (existingOrder != null)
            {
                existingOrder.CustomerID = order.CustomerID;
                existingOrder.OrderDate = order.OrderDate;
                existingOrder.TotalAmount = order.TotalAmount;
            }
        }
    }
}
