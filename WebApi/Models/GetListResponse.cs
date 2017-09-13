using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Model;

namespace WebApi.Models
{
    public class GetListResponse<T> where T : IdentityModel
    {
        public T[] Items { get; set; }

        public int TotalCount { get; set; }

        public int PageNumber { get; set; }

        public int PageSize { get; set; }
    }
}