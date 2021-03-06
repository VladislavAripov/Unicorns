﻿namespace OnlineWatchStore.Domain
{
    public class Category
    {
        public int Id { get; protected set; }
        
        public string Name { get; protected set; }

        protected Category()
        {
        }

        public Category(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}