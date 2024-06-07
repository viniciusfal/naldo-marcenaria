import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@/components/ui/textarea'

const forSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

type FormSchema = z.infer<typeof forSchema>

export function Contact() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(forSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function handleMessage(values: FormSchema) {
    console.log(values)
  }

  return (
    <div className="flex h-screen flex-col  items-center gap-8 bg-[url('./assets/bg-contact.jpg')] px-[320px] antialiased ">
      <div className="mt-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold">
          Mande sua mensagem direto por aqui
        </h2>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Se preferir pode nos mandar preecncher as informações abaixo e nos
          mandar uma mensagem solicitando um orçamento. E assim que possível
          responderemos para você.
        </p>
      </div>
      <div className="w-1/2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleMessage)}
            className="space-y-3"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <>
                  <FormItem className="flex flex-col gap-4">
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl className="">
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>

                    <FormLabel className="">Seu email</FormLabel>
                    <FormControl className="">
                      <Input
                        type="email"
                        placeholder="Digite seu email"
                        className=""
                      />
                    </FormControl>

                    <FormLabel>Digite sua mensagem</FormLabel>
                    <FormControl>
                      <Textarea />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <Button
              variant="default"
              size="lg"
              className="w-full"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
