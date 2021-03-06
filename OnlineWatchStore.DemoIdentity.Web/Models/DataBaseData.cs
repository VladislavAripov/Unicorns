using System.Collections.Generic;
using OnlineWatchStore.Domain;

namespace OnlineWatchStore.DemoIdentity.Web.Models
{
    public class DataBaseData
    {
        public DataBaseData(List<Product> products, List<Category> categories)
        {
            Products = products;
            Categories = categories;
        }
        
        public readonly List<Product> Products;
        public readonly List<Category> Categories;
    }
}