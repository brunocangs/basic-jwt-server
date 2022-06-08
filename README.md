# Como rodar o servidor
- Tenha o Node.js + NPM instalado (preferencialmente com yarn `npm i -g yarn`)
- Instale as dependencias (`npm install` ou `yarn install`)
- Execute o programa com `node index.js`
- O servidor irá iniciar na porta 3000

## Endpoints

- Rota GET `/` 
  - Retorna `{token: string}` onde token é o JWT
  - Aceita url params de:
    - amount (Int): Quantidade pra ser sacada.
      - Esta quantidade será ajustada para o valor correto considerando decimais do contrato ao multiplicar po 10^8
    - wallet (String): Endereço que receberá os tokens RIB
- Rota POST `/validate`
  - Espera um `body` em json com o formato `{token: string}` onde token é o JWT
  - Só retorna caso o token seja válido (validado com secret: `secret`)