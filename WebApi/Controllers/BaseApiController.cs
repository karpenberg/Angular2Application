// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BaseApiController.cs" company="HYS">
//   HYS
// </copyright>
// <summary>
//   Base API controller which provides base CRUEL actions and fetches data
//   from database
// </summary>
// --------------------------------------------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using Data;
using Data.EntityFramework;
using Model;

namespace WebApi.Controllers
{
    public class BaseApiController : ApiController
    {
        public BaseApiController()
            : this(new UnitOfWork(new EmployeeDbContext()))
        {
        }

        /// <inheritdoc />
        /// <summary>
        /// The initialize.
        /// </summary>
        public BaseApiController(IUnitOfWork uow)
        {
            this.Uow = uow;
        }

       
        protected IUnitOfWork Uow { get; }
    }
}
