using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OnlineWatchStore.Data;
using OnlineWatchStore.Domain;
using OnlineWatchStore.Web.Models;

namespace OnlineWatchStore.Web.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            using (var context = new MyAppContext())
            {
                var product2 = context.Products.Find(1);
            }
            
            var category = new Category(0, "Casual watch");
            var product = new Product(0, "Product's name", "The product's description", 1500, 20,
                "Url to the product's image");

            category.Products.Add(product);

            //Add Products in Views
            return View();
        }

        public IActionResult Privacy()
        {
            //Add Products in Views
            return View("");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }
    }
}