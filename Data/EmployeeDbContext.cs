using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;
using Model;

namespace Data
{
    public class EmployeeDbContext : IdentityDbContext
    {
        public EmployeeDbContext(): base("DefaultConnection")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<EmployeeDbContext>());
        }
       
        public EmployeeDbContext(string connectionString): base(connectionString)
        {
            this.Configuration.LazyLoadingEnabled = true;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            base.OnModelCreating(modelBuilder);
        }

        public IDbSet<Department> Departments { get; set; }
        public IDbSet<Position> Positions { get; set; }
        public IDbSet<Employee> Employees { get; set; }
    }
}
