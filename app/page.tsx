import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RyansProjects() {
  const projects = [
    { id: 1, name: "Project 1", description: "Innovative web application" },
    { id: 2, name: "Project 2", description: "Mobile-first solution" },
    { id: 3, name: "Project 3", description: "Data visualization tool" },
    { id: 4, name: "Project 4", description: "E-commerce platform" },
    { id: 5, name: "Project 5", description: "AI-powered assistant" },
    { id: 6, name: "Project 6", description: "Real-time collaboration" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">Ryan's Projects</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover innovative solutions and cutting-edge applications. Explore a collection of projects designed to
              showcase modern technology and creative problem-solving.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {project.name}
                      </h3>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                    <Button
                      variant="outline"
                      className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                      asChild
                    >
                      <Link href={`/project-${project.id}`}>View Project</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm font-medium">All Systems Online</span>
          </div>
        </div>
      </div>
    </div>
  )
}
