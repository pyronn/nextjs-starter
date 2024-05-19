'use client'
import {Navbar as NextUINavBar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link} from "@/navigation";
import {usePathname} from "next/navigation";
import {Logo} from "@/components/logo";
import {Button} from "@nextui-org/button";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Activity, ChevronDown, Flash, Lock, Scale, SearchIcon, Server, TagUser} from "@/components/icons";
import {Input} from "@nextui-org/input";
import {Avatar} from "@nextui-org/avatar";
import {useState} from "react";


export const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)

    const [isLogin, setIsLogin] = useState(false)

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16}/>,
        scale: <Scale className="text-warning" fill="currentColor" size={30}/>,
        lock: <Lock className="text-success" fill="currentColor" size={30}/>,
        activity: <Activity className="text-secondary" fill="currentColor" size={30}/>,
        flash: <Flash className="text-primary" fill="currentColor" size={30}/>,
        server: <Server className="text-success" fill="currentColor" size={30}/>,
        user: <TagUser className="text-danger" fill="currentColor" size={30}/>,
    };

    return (
        <NextUINavBar isBordered={true}>
            <NavbarContent justify={"start"}>
                <NavbarBrand className={'mr-4'}>
                    <Logo className={'m-2'} size={24}/>
                    <Link className={'hidden sm:block font-bold text-inherit'} href={'/'}>
                        NestjsStarter
                    </Link>
                </NavbarBrand>
                <NavbarContent className={'hidden sm:flex gap-3'}>
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={icons.chevron}
                                    radius="sm"
                                    variant="light"
                                >
                                    Features
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="ACME features"
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            <DropdownItem
                                key="autoscaling"
                                description="ACME scales apps to meet user demand, automagically, based on load."
                                startContent={icons.chevron}
                            >
                                Autoscaling
                            </DropdownItem>
                            <DropdownItem
                                key="usage_metrics"
                                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                startContent={icons.activity}
                            >
                                Usage Metrics
                            </DropdownItem>
                            <DropdownItem
                                key="production_ready"
                                description="ACME runs on ACME, join us and others serving requests at web scale."
                                startContent={icons.flash}
                            >
                                Production Ready
                            </DropdownItem>
                            <DropdownItem
                                key="99_uptime"
                                description="Applications stay on the grid with high availability and high uptime guarantees."
                                startContent={icons.server}
                            >
                                +99% Uptime
                            </DropdownItem>
                            <DropdownItem
                                key="supreme_support"
                                description="Overcome any challenge with a supporting team ready to respond."
                                startContent={icons.user}
                            >
                                +Supreme Support
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem isActive={pathname.includes('pricing')}>
                        <Link href={'/pricing'} color={'secondary'}>Pricing</Link>
                    </NavbarItem>
                    <NavbarItem isActive={pathname.includes('about')}>
                        <Link href={'/about'} color={'secondary'}>About</Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>
            <NavbarContent justify={'end'}>
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18}/>}
                    type="search"
                />
                <Button color={'secondary'} className={isLogin ? "hidden" : "block"} onClick={() => {
                    setIsLogin(true)
                }}>Sign Up</Button>
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className={`transition-transform ${isLogin ? "block" : "hidden"}`}
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger" onClick={() => {
                            setIsLogin(false)
                        }}>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </NextUINavBar>
    )
}

