# Portal demonstrativo de notícias

Monorepo de um desafio de 2021, com API Express/MongoDB e frontend React. Não é um produto oficial de uma editora.

[![CI](https://github.com/JeffeMartins/desafioInfoGlobo/actions/workflows/ci.yml/badge.svg)](https://github.com/JeffeMartins/desafioInfoGlobo/actions/workflows/ci.yml)

## Melhorias de engenharia

- Frontend migrado de Create React App para React atual/Vite, sem credenciais de login no navegador.
- Correção do ciclo de requisições: a consulta roda na montagem com cancelamento, em vez de depender do próprio resultado.
- Busca local, estados de carregamento/vazio/erro e chaves estáveis na lista.
- Notícias públicas para leitura; publicação exige JWT. O token nunca contém senha.
- Dependências antes versionadas em `node_modules` foram retiradas do Git; configuração por ambiente e testes de autenticação.

## Executar localmente

Pré-requisitos: Node.js 24 LTS e npm; Docker Compose v2 para os serviços que usam banco.

```sh
node scripts/setup-env.mjs
docker compose up -d --build
cd reactjs
npm ci
npm run dev
```

API em `http://localhost:8080`, cliente em `http://localhost:5173`. `GET /noticias` é público. `POST /authorization/api` recebe `user`/`password` do `.env` raiz. `POST /insert/noticia` exige `Authorization: Bearer TOKEN` e recebe `titulo`, `conteudo` e `data_publicacao`.

Para popular, publique apenas notícias fictícias autorizadas. O cliente começa com um estado vazio se não houver documentos. `reactjs/.env.example` define `VITE_API_URL`; variáveis `VITE_*` são públicas no bundle.

Verificação: em `server`, `npm ci && npm test`; em `reactjs`, `npm ci && npm run build`. O frontend não tem suíte automatizada de interação completa; o build é uma verificação separada. A autenticação é demonstrativa e deve ser substituída antes de exposição pública.

## Qualidade e limites da evidência

As mudanças preservam a proposta do exercício e corrigem problemas observados no código. A CI usa Node 24 e `npm ci`, executa o build quando disponível e os testes existentes. O lockfile é versionado; dependências e pastas de build não são. Dependabot acompanha atualizações semanais. Não há promessa de cobertura total, auditoria completa de segurança ou capacidade de produção.

Não publique `.env`, cookies, tokens ou dados reais de clientes. Antes de expor a aplicação à internet, revise autenticação/autorização, TLS, limites de chamadas, logs e backups conforme o domínio. Os exemplos são para execução local. Use `docker compose down` para parar os containers; volumes persistem e `down -v` apaga seus dados.
