"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  MessageSquare,
  Bookmark,
  Zap,
  Check,
  Triangle,
  Square,
  ChevronDown,
  Battery as Gallery,
  HelpCircle,
  Bell,
  Menu,
  X,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const GlassmorphicNavbar = ({ className = "" }) => (
    <div
      className={`flex p-1 sm:p-2 items-center gap-0.5 sm:gap-1 border border-white/30 rounded-lg sm:rounded-xl backdrop-blur-lg bg-gray-300  ${className}`}
    >
      <Button
        variant="ghost"
        size="sm"
        className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-white hover:text-black rounded-md"
      >
        <Home className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-white hover:text-black rounded-md"
      >
        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-white hover:text-black rounded-md"
      >
        <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-white hover:text-black rounded-md"
      >
        <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-white hover:text-black rounded-md"
      >
        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-white hover:text-black rounded-md hidden xs:flex"
      >
        <Triangle className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-white hover:text-black rounded-md hidden xs:flex"
      >
        <Square className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>
    </div>
  )

  const MobileMenu = () => (
  <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity animate-fadeIn">
 
    <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl animate-slideIn flex flex-col">
  
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <span className="text-lg font-semibold">Menu</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMobileMenu}
          className="w-8 h-8 p-0"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

     
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <div className="flex flex-col space-y-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <MessageSquare className="w-5 h-5" />
            <span>Messages</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <Bookmark className="w-5 h-5" />
            <span>Bookmarks</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <Zap className="w-5 h-5" />
            <span>Generate</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <Check className="w-5 h-5" />
            <span>Tasks</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <Triangle className="w-5 h-5" />
            <span>Tools</span>
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <Gallery className="w-5 h-5" />
            <span>Gallery</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <HelpCircle className="w-5 h-5" />
            <span>Support</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100">
            <Bell className="w-5 h-5" />
            <span>Notifications</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)


    return (
      <>
        <header className="border-border mt-2">
          <div className="container mx-auto px-2 sm:px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1 sm:gap-2 px-2 sm:px-3">
                    <Image src="/logo.jpeg" alt="Logo" width={24} height={24} className="rounded-full" />
                    <span className="hidden sm:inline text-sm">businesscontentcreator</span>
                    <span className="sm:hidden text-xs">businesscontentcreator</span>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-gray-400 text-white border border-gray-700 shadow-lg dark:bg-gray-900 dark:text-white"
                  align="start"
                >
                  <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/login">GitHub</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <GlassmorphicNavbar className="hidden md:flex" />

            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-xs hidden md:flex px-2 sm:px-3">
                <Gallery className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">Gallery</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-1 sm:gap-2 text-xs hidden md:flex px-2 sm:px-3">
                <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">Support</span>
              </Button>
              <Button variant="ghost" size="sm" className="w-6 h-6 sm:w-8 sm:h-8 p-0 hidden md:flex">
                <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="w-6 h-6 sm:w-8 sm:h-8 p-0 hidden md:flex"
              >
                <Avatar className="w-5 h-5 sm:w-7 sm:h-7">
                  <AvatarImage src="/diverse-user-avatars.png" />
                </Avatar>
              </Button>

              <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="w-8 h-8 p-0 md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {isMobileMenuOpen && <MobileMenu />}
      </>
    )
  }
