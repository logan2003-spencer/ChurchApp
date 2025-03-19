using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ChurchApp_1.Models;

public partial class AttendanceContext : DbContext
{
    public AttendanceContext()
    {
    }

    public AttendanceContext(DbContextOptions<AttendanceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AttendanceStatus> AttendanceStatuses { get; set; }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<EventType> EventTypes { get; set; }

    public virtual DbSet<Family> Families { get; set; }

    public virtual DbSet<Organization> Organizations { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<SignUp> SignUps { get; set; }

    public virtual DbSet<Unit> Units { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite("Data Source=attendance.sqlite");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AttendanceStatus>(entity =>
        {
            entity.ToTable("attendance_status");

            entity.Property(e => e.AttendanceStatusId)
                .ValueGeneratedNever()
                .HasColumnName("attendance_status_id");
            entity.Property(e => e.AttendanceStatusName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("attendance_status_name");
        });

        modelBuilder.Entity<Event>(entity =>
        {
            entity.ToTable("events");

            entity.Property(e => e.EventId)
                .ValueGeneratedNever()
                .HasColumnName("event_id");
            entity.Property(e => e.EventAddress)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("event_address");
            entity.Property(e => e.EventDesc)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("event_desc");
            entity.Property(e => e.EventEnd)
                .HasColumnType("DATETIME")
                .HasColumnName("event_end");
            entity.Property(e => e.EventName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("event_name");
            entity.Property(e => e.EventStart)
                .HasColumnType("DATETIME")
                .HasColumnName("event_start");
            entity.Property(e => e.EventTypeId).HasColumnName("event_type_id");
            entity.Property(e => e.IsAttendance)
                .HasColumnType("BOOLEAN")
                .HasColumnName("is_attendance");
            entity.Property(e => e.OrganizationId).HasColumnName("organization_id");
            entity.Property(e => e.UnitId).HasColumnName("unit_id");

            entity.HasOne(d => d.EventType).WithMany(p => p.Events)
                .HasForeignKey(d => d.EventTypeId)
                .OnDelete(DeleteBehavior.SetNull);

                    entity.HasOne(d => d.Organization).WithMany(p => p.Events)
                .HasForeignKey(d => d.OrganizationId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.Unit).WithMany(p => p.Events)
                .HasForeignKey(d => d.UnitId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<EventType>(entity =>
        {
            entity.ToTable("event_types");

            entity.Property(e => e.EventTypeId)
                .ValueGeneratedNever()
                .HasColumnName("event_type_id");
            entity.Property(e => e.EventTypeName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("event_type_name");
        });

        modelBuilder.Entity<Family>(entity =>
        {
            entity.ToTable("family");

            entity.Property(e => e.FamilyId)
                .ValueGeneratedNever()
                .HasColumnName("family_id");
            entity.Property(e => e.UnitId).HasColumnName("unit_id");

            entity.HasOne(d => d.Unit).WithMany(p => p.Families)
                .HasForeignKey(d => d.UnitId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Organization>(entity =>
        {
            entity.ToTable("organizations");

            entity.Property(e => e.OrganizationId)
                .ValueGeneratedNever()
                .HasColumnName("organization_id");
            entity.Property(e => e.OrganizationName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("organization_name");
            entity.Property(e => e.UnitId).HasColumnName("unit_id");

            entity.HasOne(d => d.Unit).WithMany(p => p.Organizations)
                .HasForeignKey(d => d.UnitId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            // This is related to the commented out code in the Organization class, pretty sure it's not needed

            //entity.HasMany(d => d.UsersNavigation).WithMany(p => p.Organizations)
            //    .UsingEntity<Dictionary<string, object>>(
            //        "UserOrg",
            //        r => r.HasOne<User>().WithMany()
            //            .HasForeignKey("UserId")
            //            .OnDelete(DeleteBehavior.ClientSetNull),
            //        l => l.HasOne<Organization>().WithMany()
            //            .HasForeignKey("OrganizationId")
            //            .OnDelete(DeleteBehavior.ClientSetNull),
            //        j =>
            //        {
            //            j.HasKey("OrganizationId", "UserId");
            //            j.ToTable("user_org");
            //            j.IndexerProperty<int>("OrganizationId").HasColumnName("organization_id");
            //            j.IndexerProperty<int>("UserId").HasColumnName("user_id");
            //        });
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.ToTable("role");

            entity.Property(e => e.RoleId)
                .ValueGeneratedNever()
                .HasColumnName("role_id");
            entity.Property(e => e.RoleName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<SignUp>(entity =>
        {
            entity.HasKey(e => new { e.EventId, e.UserId });

            entity.ToTable("sign_up");

            entity.Property(e => e.EventId).HasColumnName("event_id");
            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.AttendanceStatusId).HasColumnName("attendance_status_id");
            entity.Property(e => e.UserEnd)
                .HasColumnType("DATETIME")
                .HasColumnName("user_end");
            entity.Property(e => e.UserStart)
                .HasColumnType("DATETIME")
                .HasColumnName("user_start");

            entity.HasOne(d => d.AttendanceStatus).WithMany(p => p.SignUps)
                .HasForeignKey(d => d.AttendanceStatusId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.Event).WithMany(p => p.SignUps)
                .HasForeignKey(d => d.EventId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.User).WithMany(p => p.SignUps)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Unit>(entity =>
        {
            entity.ToTable("unit");

            entity.Property(e => e.UnitId)
                .ValueGeneratedNever()
                .HasColumnName("unit_id");
            entity.Property(e => e.UnitName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("unit_name");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("users");

            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("user_id");
            entity.Property(e => e.City)
                .HasColumnType("VARCHAR(100)")
                .HasColumnName("city");
            entity.Property(e => e.Email)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("email");
            entity.Property(e => e.FamilyId).HasColumnName("family_id");
            entity.Property(e => e.FirstName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("first_name");
            entity.Property(e => e.LastName)
                .HasColumnType("VARCHAR(255)")
                .HasColumnName("last_name");
            entity.Property(e => e.OrganizationId).HasColumnName("organization_id");
            entity.Property(e => e.Phone)
                .HasColumnType("VARCHAR(20)")
                .HasColumnName("phone");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.State)
                .HasColumnType("CHAR(2)")
                .HasColumnName("state");
            entity.Property(e => e.Zip)
                .HasColumnType("VARCHAR(10)")
                .HasColumnName("zip");

            entity.HasOne(d => d.Family).WithMany(p => p.Users).HasForeignKey(d => d.FamilyId);

            entity.HasOne(d => d.Organization).WithMany(p => p.Users)
                .HasForeignKey(d => d.OrganizationId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
