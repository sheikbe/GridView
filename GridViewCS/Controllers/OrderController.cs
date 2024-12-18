using Microsoft.AspNetCore.Mvc;
using GridViewCS.Models;
using GridViewCS.Services;
using System.Collections.Generic;

namespace GridViewCS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _orderService;

        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Order>> GetOrders()
        {
            var orders = _orderService.GetOrders();
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public ActionResult<Order> GetOrderById(int id)
        {
            var order = _orderService.GetOrderById(id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        [HttpPost]
        public ActionResult<Order> CreateOrder(Order order)
        {
            _orderService.CreateOrder(order);
            return CreatedAtAction(nameof(GetOrderById), new { id = order.OrderID }, order);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, Order order)
        {
            if (id != order.OrderID)
            {
                return BadRequest();
            }

            var existingOrder = _orderService.GetOrderById(id);
            if (existingOrder == null)
            {
                return NotFound();
            }

            _orderService.UpdateOrder(order);
            return NoContent();
        }
    }
}
