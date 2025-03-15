using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class Organization
{
    public int OrganizationId { get; set; }

    public string OrganizationName { get; set; } = null!;

    public int UnitId { get; set; }

    public virtual ICollection<Event> Events { get; set; } = new List<Event>();

    public virtual Unit Unit { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();

    // I think this is unnecessary but I'll leave it here in case (Brynn :)
    // public virtual ICollection<User> UsersNavigation { get; set; } = new List<User>();
}
