# Contexto da modernização

Repositório: `desafioInfoGlobo`. Revisão em 28/10/2026. O objetivo é tornar o clone reproduzível e o comportamento compreensível em uma entrevista técnica, preservando o contexto histórico de exercício/protótipo.

## Decisões e validação

- Frontend migrado de Create React App para React atual/Vite, sem credenciais de login no navegador.
- Correção do ciclo de requisições: a consulta roda na montagem com cancelamento, em vez de depender do próprio resultado.
- Busca local, estados de carregamento/vazio/erro e chaves estáveis na lista.
- Notícias públicas para leitura; publicação exige JWT. O token nunca contém senha.
- Dependências antes versionadas em `node_modules` foram retiradas do Git; configuração por ambiente e testes de autenticação.


Consulte os scripts reais em `package.json` (ou nos módulos do monorepo). Build, teste unitário e teste com serviços externos são evidências diferentes. A CI não valida credenciais de terceiros nem garante comportamento em produção. O README informa dependências externas e funcionalidades ainda não implementadas.

## Segurança de configurações antigas

Configurações locais e segredos foram retirados da versão atual quando presentes. Isso não remove conteúdo de commits antigos. Se algum segredo histórico ainda estiver ativo, revogue-o no provedor e gere outro; não reutilize credenciais publicadas. A revisão preserva o histórico Git e não faz force push.
