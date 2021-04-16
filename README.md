# Envio_de_email
Servidor SMTP para envio de e-mails com o GMAIL.

O projeto utiliza [NodeJs](https://nodejs.org/en/) [express](https://expressjs.com/pt-br/) e [nodemailer](https://nodemailer.com/about/) para enviar por e-mail os dados de um formulário.

## Variáveis de Ambiente

São utilizadas as seguintes variáveis de ambiente: 

&nbsp;
GMAIL_USER -> conta que ENVIARÁ o e-mail (exemplo: seuEmail@gmail.com) 

&nbsp;
USER_PASS -> A senha da conta que enviará o e-mail (exemplo: senhaSuperSegura) 

&nbsp;
EMAIL_DESTINY -> e-mail do destinatário, ou seja, quem receberá o e-mail (exemplo: seuOutroEmail@qlqrCoisa.com)

&nbsp;
As variáveis de ambiente são necessárias pois esses são dados sensíveis e não podem ser expostos

## Download e dependências do projeto

- Execute os seguintes comandos para clonar o repositório para sua máquina e instalar as dependências necessárias.

```
$ git clone https://github.com/Matozinho/Envio_de_email.git
$ cd Envio_de_email
$ yarn
```

- Crie um arquivo .env e defina as variáveis citadas em **Variáveis de Ambiente**
- Execute o seguinte comando para "ligar" o servidor

```
$ node index.js
```
Agora as requisições feitas ao endereço do servidor enviarão por e-mail os dados passados via GET.
