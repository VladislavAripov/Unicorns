using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineWatchStore.Data;
using OnlineWatchStore.Domain;
using OnlineWatchStore.DemoIdentity.Web.Models;

namespace OnlineWatchStore.DemoIdentity.Web.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly MyAppContext _context;

        public ProductsController(ILogger<ProductsController> logger, MyAppContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index(string productName)
        {
            var product = _context.Products.FirstOrDefault(p => p.Name == productName);

            return View(product);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }
    }
}