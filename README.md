# Playbook Nouhau

A Nouhau é uma startup de transformação de culturas organizacionais por meio de metodologias inovadoras. Através de jogos empresariais, a empresa estimula o desenvolvimento de competências socioemocionais (soft skills) com estratégia.

Para esse projeto de MVP, foi desenvolvido o **Playbook Nouhau**, uma plataforma de consulta e categorização de jogos estratégicos. Na aplicação, facilitadoras e facilitadores poderão ler mais sobre os jogos, ver quais soft skills cada um potencializa, e também favoritar seus preferidos.

## Primeiros passos

Primeiro certifique-se de que a API está rodando na sua máquina.

Renomeie o arquivo ```env.example``` para ```.env```. Edite (se necessário) as variáveis de desenvolvimento de acordo com a tabela, caso a API esteja rodando em uma porta diferente da ```3050```.

| Parâmetro             | Tipo     | Descrição                                                                  |
| :-------------------- | :------- | :------------------------------------------------------------------------- |
| `API_PORT`            | `number` | Porta local da API. Necessária para permitir servidores remotos no Next.js |
| `NEXT_PUBLIC_API_URL` | `string` | Endereço da API.                                                           |
| `NEXTAUTH_URL`        | `string` | Endereço da aplicação. Necessária para o Next Auth.                        |
| `NEXTAUTH_SECRET`     | `string` | Token para o Next Auth.                                                    |

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
# ou
yarn install
yarn dev
```

Abra o endereço [http://localhost:3000](http://localhost:3000) e acesse a aplicação.

### Login

Apesar da aplicação ter suas páginas protegidas por autenticação, as credenciais de login são em memória. Para acessar, use:

**Usuário:** ```brenno```  
**Senha:** ```senhadificil```

