import { Button } from "@/components/ui/button"
import { ImageIcon, Video, Zap, Sparkles, ArrowUpDown, Train, ChevronRight } from "lucide-react"

const tools = [
  {
    name: "Image",
    description: "Create images with prompts",
    icon: ImageIcon,
   
  },
  {
    name: "Video",
    description: "Generate videos with Haiper, Pika, and more",
    icon: Video,

  },
  {
    name: "RealTime",
    description: "Real-time rendering as a camera",
    icon: Zap,
  
  },
  {
    name: "Enhancer",
    description: "Upscale and enhance images and videos",
    icon: Sparkles,
    
  },
  {
    name: "Edit",
    description: "Edit images with AI or manual photos and generations",
    icon: ImageIcon,
    
    
  },
  {
    name: "Motion Transfer",
    description: "Transfer motion from one video to another",
    icon: ArrowUpDown,
    
    badgeVariant: "default" as const,
  },
  {
    name: "Train",
    description: "Train AI to replicate your style, products, or characters",
    icon: Train,
    
    badgeVariant: null,
  },
]

export default function GridSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Generate</h2>
        <a className="text-sm ">
          Show all
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map((tool) => {
          const IconComponent = tool.icon
          return (
            <div key={tool.name} className="p-4 flex gap-2.5 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
               
                  
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-sm">{tool.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
              </div>

              <div className="mt-4 flex justify-end">
                <Button size="sm" variant="outline" className="text-xs bg-gray-100 hover:bg-gray-200">
                  Open
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      
      <div className="mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <div className="flex items-center gap-2">
            <a href="#" className="text-xs">
              Latest
            </a>
            <a href="#" className="text-xs">
              Trending
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
