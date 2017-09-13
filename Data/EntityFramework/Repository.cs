using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using Model;

namespace Data.EntityFramework
{
    public class Repository<T> : IRepository<T> where T : IdentityModel, new()
    {
        private readonly DbContext _db;

        public Repository(DbContext db)
        {
            _db = db;
        }

        public IQueryable<T> GetAll()
        {
            return _db.Set<T>().AsQueryable();
        }

        public T GetById(int id)
        {
            return _db.Set<T>().AsNoTracking().SingleOrDefault(x => x.Id == id);
        }

        public T GetById(string id)
        {
            return _db.Set<T>().Find(id);
        }

        public void AddOrUpdate(T entity)
        {
           _db.Set<T>().AddOrUpdate(entity);
        }

        public void Delete(T entity)
        {
            _db.Set<T>().Remove(entity);
        }

        public void DeleteById(int id)
        {
            var entity = _db.Set<T>().Single(x => x.Id == id);
            _db.Set<T>().Attach(entity);
            _db.Set<T>().Remove(entity);
        }

        public IEnumerable<T> AddRange(IEnumerable<T> entities)
        {
           var result =  _db.Set<T>().AddRange(entities);
            return result;
        }

        public void Dispose()
        {
            _db?.Dispose();
        }
    }
}
