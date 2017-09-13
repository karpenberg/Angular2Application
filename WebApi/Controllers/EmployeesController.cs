using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using Data;
using Model;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class EmployeesController : BaseApiController
    {
        // GET: api/Employees  
        [HttpGet]
        [Route("api/Employees/{pageSize}/{pageNumber}")]
        public GetListResponse<Employee> Get(int pageSize, int pageNumber)
        {
            var employees = this.Uow.Repository<Employee>().GetAll().OrderBy(x=>x.FirstName);
            return new GetListResponse<Employee>
            {
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalCount = employees.Count(),
                Items = employees.Skip(pageSize * (pageNumber - 1)).Take(pageSize).ToArray()
            };
        }

        // GET: api/Employees/5  
        [ResponseType(typeof(Employee))]
        public IHttpActionResult GetEmployee(int id)
        {
            var employee = this.Uow.Repository<Employee>().GetById(id);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }
    }
}