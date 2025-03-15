using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class User
{
    public int UserId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }

    public string? Zip { get; set; }

    public int? FamilyId { get; set; }

    public int OrganizationId { get; set; }

    public int RoleId { get; set; }

    public virtual Family? Family { get; set; }

    public virtual Organization Organization { get; set; } = null!;

    public virtual Role Role { get; set; } = null!;

    public virtual ICollection<SignUp> SignUps { get; set; } = new List<SignUp>();

    public virtual ICollection<Organization> Organizations { get; set; } = new List<Organization>();
}
