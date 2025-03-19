using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class Family
{
    public int FamilyId { get; set; }

    public int UnitId { get; set; }

    public virtual Unit Unit { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
