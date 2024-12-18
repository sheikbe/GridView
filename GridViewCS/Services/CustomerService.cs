using System.Collections.Generic;
using GridViewCS.Models;

namespace GridViewCS.Services
{
    public class CustomerService
    {
        private readonly List<Customer> _customers;

        public CustomerService()
        {
            _customers = new List<Customer>
            {
                new Customer { CustomerID = 1, CompanyName = "Company A", FirstName = "John", LastName = "Doe" },
                new Customer { CustomerID = 2, CompanyName = "Company B", FirstName = "Jane", LastName = "Smith" }
            };
        }

        public IEnumerable<Customer> GetCustomers()
        {
            return _customers;
        }

        public Customer GetCustomerById(int id)
        {
            return _customers.Find(c => c.CustomerID == id);
        }

        public void CreateCustomer(Customer customer)
        {
            _customers.Add(customer);
        }

        public void UpdateCustomer(Customer customer)
        {
            var existingCustomer = GetCustomerById(customer.CustomerID);
            if (existingCustomer != null)
            {
                existingCustomer.CompanyName = customer.CompanyName;
                existingCustomer.FirstName = customer.FirstName;
                existingCustomer.LastName = customer.LastName;
            }
        }
    }
}
