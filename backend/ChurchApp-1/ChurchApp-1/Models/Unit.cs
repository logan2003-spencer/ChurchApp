using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class Unit
{
    public int UnitId { get; set; }

    public string UnitName { get; set; } = null!;

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();

    public virtual ICollection<Family> Families { get; set; } = new List<Family>();

    public virtual ICollection<Organization> Organizations { get; set; } = new List<Organization>();
}
