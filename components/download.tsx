import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DownloadIcon, Apple, CheckCircle2 } from "lucide-react"

const requirements = ["macOS 26 或更高版本", "Apple Silicon 或 Intel 处理器", "至少 50MB 可用空间"]

export function Download() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                <Apple className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">下载 LaunchPod Beta</h2>
                <p className="text-muted-foreground mt-1">免费试用，无需注册</p>
              </div>
            </div>

            <div className="my-8 space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 py-6 h-auto flex-1 group">
                <DownloadIcon className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                下载 macOS 版本
              </Button>
              <Button size="lg" variant="outline" className="text-base px-6 py-6 h-auto bg-transparent">
                查看更新日志
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6 text-center">版本 0.9.2 Beta • 更新于 2025年1月</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
