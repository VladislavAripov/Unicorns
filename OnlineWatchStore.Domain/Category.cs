using System.Collections.Generic;

namespace OnlineWatchStore.Domain
{
    public class Category
    {
        private Category()
        {
        }

        public Category(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public int Id { get; protected set; }
        
        public string Name { get; protected set; }
        
        public IList<Product> Products { get; set; } = new List<Product>();
    }
}