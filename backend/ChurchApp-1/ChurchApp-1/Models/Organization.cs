using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class Organization
{
    public int OrganizationId { get; set; }
    public string OrganizationName { get; set; } = null!;

    // Re-added based on missing references in AttendanceContext.cs
    public virtual ICollection<Event> Events { get; set; } = new List<Event>();
    public virtual ICollection<User> Users { get; set; } = new List<User>();

    // Adding required Unit reference
    public int UnitId { get; set; }
    public virtual Unit Unit { get; set; } = null!;
}