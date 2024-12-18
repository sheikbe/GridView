using Microsoft.AspNetCore.Mvc;
using GridViewCS.Models;
using GridViewCS.Services;
using System.Collections.Generic;

namespace GridViewCS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerService _customerService;

        public CustomerController(CustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Customer>> GetCustomers()
        {
            var customers = _customerService.GetCustomers();
            return Ok(customers);
        }

        [HttpGet("{id}")]
        public ActionResult<Customer> GetCustomerById(int id)
        {
            var customer = _customerService.GetCustomerById(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        [HttpPost]
        public ActionResult<Customer> CreateCustomer(Customer customer)
        {
            _customerService.CreateCustomer(customer);
            return CreatedAtAction(nameof(GetCustomerById), new { id = customer.CustomerID }, customer);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCustomer(int id, Customer customer)
        {
            if (id != customer.CustomerID)
            {
                return BadRequest();
            }

            var existingCustomer = _customerService.GetCustomerById(id);
            if (existingCustomer == null)
            {
                return NotFound();
            }

            _customerService.UpdateCustomer(customer);
            return NoContent();
        }
    }
}
