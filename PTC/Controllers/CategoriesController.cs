using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PTC.Models;

namespace PTC.Controllers
{
    [RoutePrefix("api/CategoryApi")]
    public class CategoriesController : ApiController
    {
        [HttpPost]
        [Route("SearchCategories")]
        public IHttpActionResult GetSearchCategories()
        {
            IHttpActionResult ret;
            PTCViewModel vm = new PTCViewModel();

            vm.LoadSearchCategories();

            if ( vm.SearchCategories.Count() > 0 )
            {
                ret = Ok(vm.SearchCategories);
            } else
            {
                ret = NotFound();
            }

            return ret;
        }
    }
}
