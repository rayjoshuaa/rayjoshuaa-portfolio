/**
 * Product data for the Uses page (hardware tab).
 * Software/tools live in DATA.tools (resume.tsx).
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [];

export interface HardwareItem {
  title: string;
  description: string;
  category: string;
  icon: "laptop" | "monitor" | "hard-drive" | "bot" | "cpu" | "smartphone" | "tablet" | "headphones";
}

/** Ray Joshua's actual everyday hardware — described by role, no affiliate links. */
export const hardware: HardwareItem[] = [
  {
    title: "Development Laptop",
    description:
      "My main machine for everything — coding in .NET, React and Docker, building school systems, lesson prep, and client web work.",
    category: "Workstation",
    icon: "laptop",
  },
  {
    title: "Classroom Projector & Smart Display",
    description:
      "For presenting Computing and ICT lessons, live coding demos, and walking students through Scratch and Python projects on the big screen.",
    category: "Workstation",
    icon: "monitor",
  },
  {
    title: "External SSD & Cloud Backup",
    description:
      "Where project files, lesson materials, Figma designs and portfolio backups live — school work and client work, always backed up.",
    category: "Workstation",
    icon: "hard-drive",
  },
  {
    title: "LEGO Robotics Kits",
    description:
      "Classroom sets for hands-on robotics with my primary and secondary students — building, programming, and plenty of trial and error.",
    category: "Robotics Classroom",
    icon: "bot",
  },
  {
    title: "Arduino Uno Starter Kits",
    description:
      "Sensors, LEDs, motors and microcontrollers for secondary-level electronics and C++ coding projects.",
    category: "Robotics Classroom",
    icon: "cpu",
  },
  {
    title: "Smartphone",
    description:
      "Shooting content, managing social media accounts for clients, and staying reachable for VA work on the go.",
    category: "Everyday Tech",
    icon: "smartphone",
  },
  {
    title: "Tablet",
    description:
      "Reading and reviewing e-books and learning materials, checking designs, and marking student work away from my desk.",
    category: "Everyday Tech",
    icon: "tablet",
  },
  {
    title: "Wireless Headphones",
    description:
      "For focus while coding, online classes, and video calls with clients and collaborators.",
    category: "Everyday Tech",
    icon: "headphones",
  },
];
