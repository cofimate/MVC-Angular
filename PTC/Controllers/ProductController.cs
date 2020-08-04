using System.Collections.Generic;
using System.Web.Mvc;

namespace PTC.Controllers
{
  public class ProductController : Controller
  {
    public ActionResult Product()
    {
      return View();
    }
  }
}