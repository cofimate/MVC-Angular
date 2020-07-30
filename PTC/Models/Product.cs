namespace PTC.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Product")]
    public partial class Product
    {
        public int ProductId { get; set; }

        [StringLength(80)]
        public string ProductName { get; set; }

        public DateTime? IntroductionDate { get; set; }

        [Column(TypeName = "money")]
        public decimal? Price { get; set; }

        [StringLength(255)]
        public string Url { get; set; }

        public int? CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }
}
