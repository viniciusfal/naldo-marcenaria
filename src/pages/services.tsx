import { Card, CardContent } from '@/components/ui/card'
import about1Img from '@/assets/about-1.svg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Services() {
  return (
    <div className=" flex h-screen flex-col items-center justify-center gap-8">
      <div className=" text-center">
        <h2 className="mb-2 text-3xl font-bold">Nossos Serviços</h2>
        <p className=" text-muted-foreground">
          Para você que esta procurando, conheça nossos serviços
        </p>
      </div>

      <div className="w-1/2 ">
        <Carousel className="h-full ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div>
                        <img
                          src={about1Img}
                          alt=""
                          className="text-2xl font-semibold"
                        />
                        <div className="mt-4 flex flex-col gap-2">
                          <strong className="text-xl">
                            Banquinho de madeira
                          </strong>
                          <span className="text-sm text-muted-foreground">
                            você pode escolher a qualidade do banco que
                            melhordesejar
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
