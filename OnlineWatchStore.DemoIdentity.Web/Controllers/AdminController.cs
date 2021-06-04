using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OnlineWatchStore.DemoIdentity.Web.Models;
using OnlineWatchStore.Domain;
using OnlineWatchStore.Data;

namespace OnlineWatchStore.DemoIdentity.Web.Controllers
{
    [Authorize(Roles = "admin")]
    public class AdminController : Controller
    {
        private readonly MyAppContext _context;

        public AdminController(MyAppContext context)
        {
            _context = context;
        }

        [Route("admin")]
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpGet]
        [Route("admin/categories")]
        public IActionResult Categories()
        {
            return View(_context.Categories.ToList());
        }

        [Route("admin/categories")]
        [HttpPost]
        public IActionResult Categories(int id, string name)
        {
            var newCategory = new Category(id, name);
            _context.Categories.Add(newCategory);
            _context.SaveChangesAsync();
            
            return View(_context.Categories.ToList());
        }
        
        
        [Route("admin/products")]
        [HttpGet]
        public IActionResult Products()
        {
            return View(_context.Products.ToList());
        }

        [Route("admin/products")]
        [HttpPost]
        public IActionResult Products(int id, string name, string description, string priceRub, string priceUsd, string imageUrl, int categoryId)
        {
            var newProduct = new Product(id, name, description, Convert.ToDecimal(priceRub), Convert.ToDecimal(priceUsd), imageUrl, categoryId);
            _context.Products.Add(newProduct);
            _context.SaveChangesAsync();
            
            return View(_context.Products.ToList());
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }
    }
}