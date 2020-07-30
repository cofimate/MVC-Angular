using System.Collections.Generic;
using System.Web.Mvc;

namespace PTC.Controllers
{
  public class ProductController : Controller
  {
    public ActionResult Product() {
      PTCViewModel vm = new PTCViewModel();

      vm.HandleRequest();

      return View(vm);
    }

    [HttpPost]
    public ActionResult Product(PTCViewModel vm) {
      vm.HandleRequest();

      // If everything is OK, update the model state on the page
      if (vm.IsValid) {
        ModelState.Clear();
      }
      else {
        ModelState.Merge(vm.Messages);
      }

      return View(vm);
    }
  }
}