using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class AttendanceStatus
{
    public int AttendanceStatusId { get; set; }

    public string AttendanceStatusName { get; set; } = null!;

    public virtual ICollection<SignUp> SignUps { get; set; } = new List<SignUp>();
}
