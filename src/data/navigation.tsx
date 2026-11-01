import { Icons } from "@/components/icons";
import { HomeIcon, BookOpen, FolderIcon, Briefcase, Wrench } from "lucide-react";

export const NAVBAR = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: BookOpen, label: "Blog" },
  { href: "/projects", icon: FolderIcon, label: "Projects" },
  { href: "/services", icon: Briefcase, label: "Services" },
  { href: "/tools", icon: Wrench, label: "Tools" },
];

export const CONTACT = {
    email: "rayjoshua432@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rayjoshuaa",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rayjoshua432/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ry_devs",
        icon: Icons.x,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/rayjoshua432",
        icon: Icons.instagram,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://facebook.com/rj432",
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=rayjoshua432@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  };
