import { Badge } from "@/components/ui/badge"
import {
  ImageIcon,
  Video,
  Zap,
  Sparkles,
  ArrowUpDown,
  Train,
  ChevronRight,
  PencilOff,
  MicVocal,
} from "lucide-react"

const tools = [
  {
    name: "Image",
    description: "Create images with prompts",
    icon: ImageIcon,
    badge: "NEW",
    color: "bg-gray-700",
  },
  {
    name: "Video",
    description: "Generate videos with Haiper, Pika, and more",
    icon: Video,
    color: "bg-yellow-500",
  },
  {
    name: "RealTime",
    description: "Real-time rendering as a camera",
    icon: Zap,
    badge: null,
    color: "bg-green-200",
  },
  {
    name: "Enhancer",
    description: "Upscale and enhance images and videos",
    icon: Sparkles,
    badge: "NEW",
    color: "bg-gray-600",
  },
  {
    name: "Edit",
    description: "Edit images with AI or manual photos and generations",
    icon: PencilOff,
    badge: "NEW",
    color: "bg-purple-800",
  },
  {
    name: "Video Lipsync",
    description: "Teach knea to replicate styles, and more",
    icon: MicVocal,
    color: "bg-purple-200",
  },
  {
    name: "Motion Transfer",
    description: "Transfer motion from one video to another",
    icon: ArrowUpDown,
    badge: "NEW",
    color: "bg-black",
  },
  {
    name: "Train",
    description: "Train AI to replicate your style, products, or characters",
    icon: Train,
    badge: null,
    color: "bg-orange-400",
  },
]

export default function GridSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Generate</h2>
        <a className="text-sm flex items-center gap-1 cursor-pointer">
          Show all
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map((tool) => {
          const IconComponent = tool.icon
          return (
            <div
              key={tool.name}
              className="p-4 flex flex-col hover:shadow-md transition-shadow cursor-pointer group rounded-lg"
            >
              <div className="flex gap-3 items-start">
              
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${tool.color}`}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </div>

             
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">{tool.name}</h3>
                    {tool.badge && (
                      <Badge className="text-[10px] px-2 py-0.5 bg-blue-500 text-white rounded-md">
                        {tool.badge}
                      </Badge>
                    )}
                  </div>
                 <div className="flex items-center gap-2 mt-1">
                        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                            {tool.description}
                        </p>
                        <a className="text-xs bg-gray-300 px-1.5 rounded-md py-1 hover:bg-gray-200 shrink-0"> Open </a>
                 </div>

                </div>
              </div>

         
              
            </div>
          )
        })}
      </div>

     
      

      
     
    </section>
  )
}
