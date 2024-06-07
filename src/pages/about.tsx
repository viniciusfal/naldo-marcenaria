import { Button } from '@/components/ui/button'
import about1Img from '@/assets/about-1.svg'
import about2Img from '@/assets/about-2.svg'
import about3Img from '@/assets/about-3.svg'
import about4Img from '@/assets/about-4.svg'

export function About() {
  return (
    <div className="relative h-screen bg-fuchsia-100 antialiased">
      <div className="absolute flex h-screen w-full flex-col  items-center justify-center">
        <div className="max-w-[632px] text-center">
          <h2 className="text-4xl font-bold">
            Quase 30 anos de atuação em Brasília e Região.
          </h2>
          <p className="mb-8 mt-7 text-sm text-slate-400">
            Há quase 30 anos construindo moveis de qualidade e com toda a
            demanda que o cliente sonha adiquirir o que sonha lorim ipsum lorim
            ipsum lorim ipsum. ksamdkamçskdmaçdmasç.
          </p>
          <Button size={'lg'}>Quero um orçamento</Button>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between">
          <img src={about1Img} alt="" className="" />
          <img src={about3Img} alt="" className="" />
        </div>
        <div className="flex justify-between ">
          <img src={about2Img} alt="" />
          <img src={about4Img} alt="" className="pt-12" />
        </div>
      </div>
    </div>
  )
}
