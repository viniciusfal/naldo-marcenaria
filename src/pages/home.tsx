import { Header } from '@/components/header'
import vetorHero from '@/assets/vetor-hero.svg'
import bgHero from '@/assets/bg-hero.svg'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <div className="relative h-screen w-full bg-teal-950 px-[320px] text-muted antialiased">
      <Header />

      <img
        src={vetorHero}
        alt=""
        className="absolute bottom-20 left-0  w-full opacity-40"
      />

      <div className=" flex items-center justify-between">
        <div className="max-w-[628px] space-y-8">
          <h1 className="text-5xl font-bold leading-tight text-muted">
            Transforme sua casa em um lar dos sonhos com móveis planejados sob
            medida.
          </h1>
          <p className="text-sm leading-tight text-slate-400 ">
            Seja a sua sala de estar, cozinha ou quarto, nós entendemos que cada
            espaço é único, assim como você. Com a nossa expertise em marcenaria
            e design, criamos móveis personalizados que se encaixam
            perfeitamente no seu estilo de vida.
          </p>
          <Button size="lg" className="absolute">
            Entrar em contato
          </Button>
        </div>

        <div className="mt-12">
          <img src={bgHero} alt="" />
        </div>
      </div>
    </div>
  )
}
