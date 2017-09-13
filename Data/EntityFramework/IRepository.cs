using System;
using System.Collections.Generic;
using System.Linq;

namespace Data.EntityFramework
{
    public interface IRepository<T> : IDisposable
    {
        IQueryable<T> GetAll();
        T GetById(int id);
        void Delete(T entity);
        void DeleteById(int id);
        void AddOrUpdate(T entity);

        IEnumerable<T> AddRange(IEnumerable<T> entities);
    }
}
