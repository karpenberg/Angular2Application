using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Data.EntityFramework
{
    public interface IUnitOfWork : IDisposable
    {
        void Save();
        void Dispose(bool disposing);
        IRepository<T> Repository<T>() where T : class;
    }
}
