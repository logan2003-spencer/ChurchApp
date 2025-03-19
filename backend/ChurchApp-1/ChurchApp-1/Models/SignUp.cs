using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChurchApp_1.Models;

public partial class SignUp
{
    [Key]
    public int SignUpId { get; set; }
    public int EventId { get; set; }

    public int UserId { get; set; }

    public DateTime UserStart { get; set; }

    public DateTime UserEnd { get; set; }

    public int AttendanceStatusId { get; set; }

    public virtual AttendanceStatus AttendanceStatus { get; set; } = null!;

    public virtual Event Event { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
