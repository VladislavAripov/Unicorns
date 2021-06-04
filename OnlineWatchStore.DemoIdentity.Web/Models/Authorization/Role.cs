using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Internal;

namespace OnlineWatchStore.DemoIdentity.Web.Models.Authorization
{
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string NormalizedName { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}