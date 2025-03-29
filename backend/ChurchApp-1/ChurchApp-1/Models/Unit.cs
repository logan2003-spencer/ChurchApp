using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class Unit
{
    public int UnitId { get; set; }

    public string UnitName { get; set; } = null!;

    public virtual ICollection<Family> Families { get; set; } = new List<Family>();
}
