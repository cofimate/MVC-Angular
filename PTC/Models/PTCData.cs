namespace PTC.Models
{
  using System;
  using System.Data.Entity;
  using System.ComponentModel.DataAnnotations.Schema;
  using System.Linq;

  public partial class PTCData : DbContext
  {
    public PTCData()
        : base("name=PTCData")
    {
    }

    public virtual DbSet<Category> Categories { get; set; }
    public virtual DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Product>()
          .Property(e => e.Price)
          .HasPrecision(19, 4);
    }
  }
}
