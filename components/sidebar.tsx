'use client'
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Link} from "@/navigation";

export const Sidebar = () => {
    const menus = [
        {
            title: "Dashboard",
            icon: "home",
            href: "/dashboard",
            children: [
                {
                    title: "Analytics",
                    href: "/dashboard/analytics"
                },
                {
                    title: "Sales",
                    href: "/dashboard/sales"
                },
                {
                    title: "Orders",
                    href: "/dashboard/orders"
                }
            ]
        },
        {
            title: "Profile",
            icon: "user",
            href: "/profile"
        },
        {
            title: "Settings",
            icon: "settings",
            href: "/settings"
        },
        {
            title: "Logout",
            icon: "logout",
            href: "/logout"
        }
    ]
    const defaultContent = "content"
    return (
        <Accordion selectionMode="multiple">
            {
                menus.map((menu, index) => {
                    return (
                        <AccordionItem key={index} aria-label={menu.title} title={menu.title}>
                            {menu.children ? (
                                <Accordion selectionMode="single">
                                    {
                                        menu.children.map((child, index) => {
                                            return (
                                                <AccordionItem key={index} aria-label={child.title} title={child.title}>
                                                    {defaultContent}
                                                </AccordionItem>
                                            )
                                        })
                                    }
                                </Accordion>
                            ) : menu.title}
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}
