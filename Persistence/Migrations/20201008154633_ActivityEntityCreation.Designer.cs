﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
  [DbContext(typeof(DataContext))]
  [Migration("20201008154633_ActivityEntityCreation")]
  partial class ActivityEntityCreation
  {
    protected override void BuildTargetModel(ModelBuilder modelBuilder)
    {
#pragma warning disable 612, 618
      modelBuilder
        .HasAnnotation("ProductVersion", "3.1.1");

      modelBuilder.Entity("Domain.Activity", b =>
      {
        b.Property<Guid>("ID")
          .ValueGeneratedOnAdd()
          .HasColumnType("TEXT");

        b.Property<string>("Category")
          .HasColumnType("TEXT");

        b.Property<string>("City")
          .HasColumnType("TEXT");

        b.Property<DateTime>("Date")
          .HasColumnType("TEXT");

        b.Property<string>("Description")
          .HasColumnType("TEXT");

        b.Property<string>("Title")
          .HasColumnType("TEXT");

        b.Property<string>("Venue")
          .HasColumnType("TEXT");

        b.HasKey("ID");

        b.ToTable("Activities");
      });

      modelBuilder.Entity("Domain.Value", b =>
      {
        b.Property<int>("Id")
          .ValueGeneratedOnAdd()
          .HasColumnType("INTEGER");

        b.Property<string>("Name")
          .HasColumnType("TEXT");

        b.HasKey("Id");

        b.ToTable("Values");

        b.HasData(
          new
          {
            Id = 1,
              Name = "Value 101"
          },
          new
          {
            Id = 2,
              Name = "Value 102"
          },
          new
          {
            Id = 3,
              Name = "Value 103"
          });
      });
#pragma warning restore 612, 618
    }
  }
}