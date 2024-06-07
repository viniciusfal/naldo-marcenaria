package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/mailersend/mailersend-go"
)

var APIKey = "mlsn.e2aa57f0ea83839da8d3b83c206d152fbdd0f44cfeba4441e2ee2aabd2088de8"

func main() {
	ms := mailersend.NewMailersend(APIKey)

	ctx := context.Background()
	ctx, cancel := context.WithTimeout(ctx, 10*time.Second)
	defer cancel()

	subject := "Subject"
	text := "Vamos dar as mãos 123, quem errrar o passo perde a vez."
	html := "Vamos dar as mãos 123, quem errrar o passo perde a vez."

	from := mailersend.From{
		Name:  "viniciusfal",
		Email: "viniciusps178@gmail.com",
	}

	recipients := []mailersend.Recipient{
		{
			Name:  "Vinicius",
			Email: "viniciusoficialc20@gmail.com",
		},
	}

	tags := []string{"foo", "bar"}

	message := ms.Email.NewMessage()

	message.SetFrom(from)
	message.SetRecipients(recipients)
	message.SetSubject(subject)
	message.SetHTML(html)
	message.SetText(text)
	message.SetTags(tags)

	res, err := ms.Email.Send(ctx, message)

	if err != nil {
		log.Fatalf("Erro ao enviar email: %v", err)
	}

	fmt.Printf("Email enviado com sucesso! X-Message-Id: %s\n", res.Header.Get("X-Message-Id"))

}
