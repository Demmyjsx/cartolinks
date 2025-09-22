"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const featuredModels = [
  {
    id: 1,
    label: "FEATURED MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the latest raw and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic results.",
    buttonText: "Try WAN 2.2",
    backgroundImage: "/portrait-of-person-with-artistic-lighting.jpg",
    gradient: "from-blue-900/20 to-purple-900/20",
  },
  {
    id: 2,
    label: "FEATURED MODEL",
    title: "DALL-E 3",
    subtitle: "Advanced AI Image Creation",
    description:
      "Create stunning, high-quality images with OpenAI's most advanced image generation model. Perfect for creative projects and professional use.",
    buttonText: "Try DALL-E 3",
    backgroundImage: "/futuristic-ai-art.jpg",
    gradient: "from-green-900/20 to-teal-900/20",
  },
  {
    id: 3,
    label: "FEATURED MODEL",
    title: "Midjourney",
    subtitle: "Artistic AI Generation",
    description:
      "Transform your ideas into breathtaking artwork with Midjourney's cutting-edge AI. Ideal for artistic and creative applications.",
    buttonText: "Try Midjourney",
    backgroundImage: "/abstract-digital-art.jpg",
    gradient: "from-purple-900/20 to-pink-900/20",
  },
  {
    id: 4,
    label: "FEATURED MODEL",
    title: "Stable Video",
    subtitle: "AI Video Generation",
    description:
      "Create dynamic video content with AI-powered generation. Transform static images into engaging video sequences.",
    buttonText: "Try Stable Video",
    backgroundImage: "/cyberpunk-portrait.jpg",
    gradient: "from-orange-900/20 to-red-900/20",
  },
]

const openSourModels = [
  {
    id: 1,
    title: "Open Sour",
    subtitle: "FLUX1 Krea",
    description:
      "We've made it our mission to FLUX1 Krea model super-quick. Download and run our model samples and the technical report of our model.",
    backgroundImage: "/luxury-whiskey-bottle-on-dark-background.jpg",
    gradient: "from-amber-900/20 to-orange-900/20",
  },
  {
    id: 2,
    title: "Open Sour",
    subtitle: "Stable Diffusion XL",
    description:
      "Experience the power of open-source image generation with Stable Diffusion XL. High-quality results with complete creative control.",
    backgroundImage: "/stable-diffusion-artwork.jpg",
    gradient: "from-red-900/20 to-rose-900/20",
  },
  {
    id: 3,
    title: "Open Sour",
    subtitle: "ComfyUI Workflow",
    description:
      "Advanced node-based interface for complex AI workflows. Build custom pipelines and achieve professional-grade results.",
    backgroundImage: "/comfyui-workflow-visualization.jpg",
    gradient: "from-indigo-900/20 to-blue-900/20",
  },
]

export default function HeroSection() {
  const [currentFeatured, setCurrentFeatured] = useState(0)
  const [currentOpenSour, setCurrentOpenSour] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredModels.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const nextOpenSour = () => {
    setCurrentOpenSour((prev) => (prev + 1) % openSourModels.length)
  }

  const prevOpenSour = () => {
    setCurrentOpenSour((prev) => (prev - 1 + openSourModels.length) % openSourModels.length)
  }

  return (
    <section className="relative px-2 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card
          className={`relative overflow-hidden bg-gradient-to-br ${featuredModels[currentFeatured].gradient} border-0 min-h-[300px] lg:min-h-[400px] transition-all duration-500`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-500"
            style={{
              backgroundImage: `url('${featuredModels[currentFeatured].backgroundImage}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-between">
            <div className="text-xs text-white/70 uppercase tracking-wider">
              {featuredModels[currentFeatured].label}
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  {featuredModels[currentFeatured].title}
                </h2>
                <h3 className="text-lg lg:text-xl text-white/90 font-medium mb-3">
                  {featuredModels[currentFeatured].subtitle}
                </h3>
                <p className="text-sm text-white/70 max-w-md leading-relaxed">
                  {featuredModels[currentFeatured].description}
                </p>
              </div>

              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                {featuredModels[currentFeatured].buttonText}
              </Button>
            </div>
          </div>
        </Card>

        <div className="relative">
          <Card
            className={`relative overflow-hidden bg-gradient-to-br ${openSourModels[currentOpenSour].gradient} border-0 min-h-[300px] lg:min-h-[400px] transition-all duration-300`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70 transition-all duration-300"
              style={{
                backgroundImage: `url('${openSourModels[currentOpenSour].backgroundImage}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-between">
              <div className="text-xs text-white/70 uppercase tracking-wider">OR MODEL</div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2">
                    {openSourModels[currentOpenSour].title}
                  </h2>
                  <h3 className="text-lg lg:text-xl text-white/90 font-medium mb-3">
                    {openSourModels[currentOpenSour].subtitle}
                  </h3>
                  <p className="text-sm text-white/70 max-w-md leading-relaxed">
                    {openSourModels[currentOpenSour].description}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex gap-2 mt-4 justify-start">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 bg-background/80 hover:bg-background border border-border/50"
              onClick={prevOpenSour}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0 bg-background/80 hover:bg-background border border-border/50"
              onClick={nextOpenSour}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        {featuredModels.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentFeatured ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
