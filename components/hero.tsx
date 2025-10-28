import { Button } from "@/components/ui/button"
import { ArrowDown, Rocket } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Beta badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-sm text-accent-foreground font-medium">Beta 版本现已开放下载</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
          LaunchPad
          <br />
          <span className="text-muted-foreground">回来了</span>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          macOS 26 移除了系统启动台？LaunchPod 完美还原你熟悉的 LaunchPad 体验， 并带来更强大的快速启动和剪切板管理功能
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button size="lg" className="text-base px-8 py-6 h-auto group">
            <Rocket className="mr-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            下载 Beta 版
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto bg-transparent">
            了解更多
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* App preview mockup */}
        <div className="relative max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
            <div className="aspect-video bg-muted/30 flex items-center justify-center p-8">
              <div className="grid grid-cols-4 md:grid-cols-6 gap-6 w-full max-w-2xl">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl bg-accent/20 border border-accent/30 hover:scale-110 transition-transform cursor-pointer"
                    style={{ animationDelay: `${i * 0.02}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-accent/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  )
}
