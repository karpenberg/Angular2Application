using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Data.EntityFramework
{
    
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
        private Hashtable _repositories;
        private bool _disposed;

        public UnitOfWork(DbContext context)
        {
            _context = context;
            _context.Configuration.LazyLoadingEnabled = true;
        }

        public void Dispose()
        {
            if (!_disposed)
            {
                _context.Dispose();

            }
            _disposed = true;
            GC.SuppressFinalize(this);
        }


        public void Save()
        {
            this._context.SaveChanges();
        }

       
        public void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }

            _disposed = true;
        }

        
        public IRepository<T> Repository<T>() where T : class
        {
            if (_repositories == null)
            {
                _repositories = new Hashtable();
            }

            var type = typeof(T).Name;

            if (!_repositories.ContainsKey(type))
            {
                var repositoryType = typeof(Repository<>);
                var repositoryInstance = Activator.CreateInstance(
                    repositoryType.MakeGenericType(typeof(T)), this._context);

                _repositories.Add(type, repositoryInstance);
            }

            return (IRepository<T>)this._repositories[type];
        }
    }
}


