using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Employee : NamedObject
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Patronymic { get; set; }

        public virtual Position Position { get; set; }

        public virtual Department Department { get; set; }

        public string PhotoUrl { get; set; }

        public DateTime DateOfBirth { get; set; }

    }
}
