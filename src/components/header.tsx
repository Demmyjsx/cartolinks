'use client'
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
import { useState } from "react"


export default function Header() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = ()=> {
    setIsDarkMode(!isDarkMode);
    if(isDarkMode){
      document.documentElement.classList.remove('dark');
    } else{
      document.documentElement.classList.add('dark');
    }
  }
  return (
    <header className="border-border">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                businesscontentcreator
                <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:inline" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-gray-800 text-white border border-gray-700 shadow-lg dark:bg-gray-900 dark:text-white"
              align="start"
            >
              <DropdownMenuLabel className="text-gray-300">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/login">Github</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      
      <div className="flex p-2 items-center gap-1 border border-white/30 rounded-xl backdrop-blur-lg bg-white/20 dark:bg-gray-800/30">
  <Button
    variant="ghost"
    size="sm"
    className="w-8 h-8 p-0 hover:bg-white hover:text-black rounded-md"
  >
    <Home className="w-4 h-4" />
  </Button>
  <Button
    variant="ghost"
    size="sm"
    className="w-8 h-8 p-0 hover:bg-white hover:text-black rounded-md"
  >
    <MessageSquare className="w-4 h-4" />
  </Button>
  <Button
    variant="ghost"
    size="sm"
    className="w-8 h-8 p-0 hover:bg-white hover:text-black rounded-md"
  >
    <Bookmark className="w-4 h-4" />
  </Button>
  <Button
    variant="ghost"
    size="sm"
    className="w-8 h-8 p-0 hover:bg-white hover:text-black rounded-md"
  >
    <Zap className="w-4 h-4" />
  </Button>
  <Button
    variant="ghost"
    size="sm"
    className="w-8 h-8 p-0 hover:bg-white hover:text-black rounded-md"
  >
    <Check className="w-4 h-4" />
  </Button>
  <Button
    variant="ghost"
    size="sm"
    className="w-8 h-8 p-0 hover:bg-white hover:text-black rounded-md"
  >
    <Triangle className="w-4 h-4" />
  </Button>
  <Button
    variant="ghost"
    size="sm"
    className="w-8 h-8 p-0 hover:bg-white hover:text-black rounded-md"
  >
    <Square className="w-4 h-4" />
  </Button>
</div>


       
        <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-xs hidden sm:flex"
                >
                  <Gallery className="w-4 h-4" />
                  Gallery
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-xs hidden sm:flex"
                >
                  <HelpCircle className="w-4 h-4" />
                  Support
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="w-8 h-8 p-0">
                 <Avatar className="w-7 h-7">
                    <AvatarImage src="/" />
                    
                  </Avatar>
                </Button>
                
        </div>
      </div>
    </header>
  )
}
