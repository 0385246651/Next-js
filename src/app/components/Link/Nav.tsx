"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu, NavigationMenuContent, NavigationMenuItem
    , NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu"
import { FaCaretDown } from "react-icons/fa"
export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <div className="flex items-center gap-2">
                            level 1  <FaCaretDown className="text-[#08BAA8] h-6 w-6" />
                        </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="">
                            <li className="row-span-3">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <div className="flex items-center gap-2">
                                            level 2 <FaCaretDown className="text-[#08BAA8] h-6 w-6" />
                                        </div>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="">
                                            <li className="row-span-3">
                                                <NavigationMenuItem>
                                                    <NavigationMenuTrigger>
                                                        <div className="flex items-center gap-2">
                                                            level 3 <FaCaretDown className="text-[#08BAA8] h-6 w-6" />
                                                        </div>
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <ul className="">
                                                            <li className="row-span-3">
                                                                <NavigationMenuLink asChild>
                                                                    <a href="/about/sub-item">
                                                                        Mục con
                                                                    </a>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        </ul>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>


    )
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
    )
})
ListItem.displayName = "ListItem"
