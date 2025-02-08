// "use client";  // used for handling client side routing

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavBarComponents {
  title: string;
  href: string;
  description: string;
}

const aboutComponents: NavBarComponents[] = [
  {
    title: "About Me",
    href: "/",
    description:
      "fill this in later.",
  },
  {
    title: "About This Site",
    href: "/",
    description:
      "fill this in later.",
  },
  {
    title: "Gallery",
    href: "/",
    description:
      "fill this in later.",
  },
  {
    title: "Follow Me Around",
    href: "/",
    description: "",
  },
];

const portfolioComponents: NavBarComponents[] = [
  {
    title: "Projects",
    href: "/projects",
    description: "Projects I've worked on",
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Skills I've learned",
  },
  {
    title: "LifeStyle",
    href: "/lifestyle",
    description: "My life style",
  },
];

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home Tab */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={"/"} className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Portfolio Tab */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {/* Left Canvas Display */}
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {/* Right List of Items */}
              {portfolioComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About Tab */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {aboutComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Services Tab */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/services" className={navigationMenuTriggerStyle()}>
              Services
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Blogs Tab */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/blogs" className={navigationMenuTriggerStyle()}>
              Blogs
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
