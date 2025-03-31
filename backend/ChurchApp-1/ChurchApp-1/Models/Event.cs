using System;
using System.Collections.Generic;

namespace ChurchApp_1.Models;

public partial class Event
{
    public int EventId { get; set; }

    public bool IsAttendance { get; set; }

    public string EventName { get; set; } = null!;

    public string? EventDesc { get; set; }

    public string? EventAddress { get; set; }

    public DateTime EventStart { get; set; }

    public DateTime EventEnd { get; set; }

    //public virtual ICollection<SignUp> SignUps { get; set; } = new List<SignUp>();
}
