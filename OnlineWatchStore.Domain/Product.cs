namespace OnlineWatchStore.Domain
{
    public class Product
    {
        public const int UsdRate = 76;

        protected Product()
        {
        }

        public Product(int id, string name, string description, decimal priceRub, decimal priceUsd, string imageUrl)
        {
            Id = id;
            Name = name;
            Description = description;
            PriceRub = priceRub;
            PriceUsd = priceUsd;
            ImageUrl = imageUrl;
        }
        
        public Product(int id, string name, string description, decimal priceRub, decimal priceUsd, string imageUrl, int categoryId)
        {
            Id = id;
            Name = name;
            Description = description;
            PriceRub = priceRub;
            PriceUsd = priceUsd;
            ImageUrl = imageUrl;
            CategoryId = categoryId;
        }

        public int Id { get; protected set; }

        public string Name { get; protected set; }

        public string Description { get; protected set; }

        public decimal PriceRub { get; protected set; }

        public decimal PriceUsd { get; protected set; }

        public string ImageUrl { get; protected set; }
        
        public virtual int CategoryId { get; protected set; }

        public void UpdatePrice(decimal priceRub)
        {
            PriceRub = priceRub;
            PriceUsd = priceRub * UsdRate;
        }
    }
}