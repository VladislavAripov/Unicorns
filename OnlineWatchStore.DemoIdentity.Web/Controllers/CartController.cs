using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineWatchStore.Data;
using OnlineWatchStore.Domain;
using OnlineWatchStore.DemoIdentity.Web.Models;

namespace OnlineWatchStore.DemoIdentity.Web.Controllers
{
    public class CartController : Controller
    {
        private readonly ILogger<CartController> _logger;

        public CartController(ILogger<CartController> logger, MyAppContext context)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }
    }
}