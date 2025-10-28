import { Grid3x3, Files, Clipboard, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Grid3x3,
    title: "完美还原 LaunchPad",
    description: "熟悉的网格布局、流畅的动画效果，就像系统原生的 LaunchPad 一样自然",
  },
  {
    icon: Files,
    title: "快速启动文件",
    description: "不仅可以启动应用，还能快速打开常用文件和文件夹，提升工作效率",
  },
  {
    icon: Clipboard,
    title: "剪切板管理",
    description: "内置强大的剪切板历史记录功能，随时访问之前复制的内容",
  },
  {
    icon: Zap,
    title: "轻量高效",
    description: "原生 Swift 开发，占用资源少，启动速度快，完美融入 macOS 生态",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">不只是 LaunchPad</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            我们在还原经典体验的基础上，加入了更多实用功能
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-balance">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
