# SlangTranslator
# ESTE PLUGIN É FORTEMENTE BASEADO E INSPIRADO NO PLUGIN TRANSLATE DO VENCORD - https://github.com/Vendicated/Vencord/tree/main/src/plugins/translate

Um plugin para Vencord que traduz gírias entre idiomas, atualmente suportando inglês para português com mais idiomas planejados.

## Recursos
- Traduz termos de gíria, expressões e abreviações do inglês para o português
- Clique direito ou passe o mouse sobre qualquer mensagem para traduzir gírias
- Ative a tradução automática de mensagens enviadas
- Dicionário abrangente de gírias da internet
- Configurações personalizáveis
- Estrutura para adicionar mais idiomas no futuro

## Demonstração
Quando você envia uma mensagem com gírias ou clica com o botão direito ou passa o mouse sobre uma mensagem com gírias, o plugin irá traduzi-la:

```
"that's fr crazy wtf no cap"
```

Será traduzido para:

```
"isso é sério louco que diabos sem mentira"
```

## Instalação
### Instalando o Vencord
Se você não tem o Vencord instalado:
1. Consulte este [tutorial no YouTube](https://www.youtube.com/watch?v=3anTy0EdvsE) para um guia completo sobre como instalar o Vencord corretamente
2. Siga as instruções oficiais no [repositório GitHub do Vencord](https://github.com/Vendicated/Vencord)

### Instalando o Plugin SlangTranslator
1. Faça o download deste repositório
2. Coloque a pasta slangTranslator dentro do diretório `src/userplugins` do seu Vencord
3. Compile o Vencord:
   ```
   cd /caminho/para/vencord
   pnpm build
   pnpm inject
   ```
4. Reinicie o Discord
5. Ative o plugin nas configurações do Vencord

## Uso
### Traduzindo Mensagens Recebidas
- Clique com o botão direito ou passe o mouse sobre qualquer mensagem para traduzir gírias
- A mensagem traduzida aparecerá abaixo da original

### Traduzindo Suas Mensagens
- Clique no ícone do tradutor de gírias na barra de chat para abrir as configurações
- Ative "Auto Tradução" para traduzir automaticamente suas mensagens antes de enviar
- Você pode alternar a tradução automática pressionando shift+clique ou clicando com o botão direito no ícone da barra de chat

## Configurações
As configurações do plugin podem ser acessadas clicando no ícone do tradutor de gírias na barra de chat:
- **Auto Tradução**: Traduz automaticamente gírias antes de enviar mensagens
- **Mostrar botão na barra de chat**: Alterna a visibilidade do botão na barra de chat
- **Mostrar dica de Auto Tradução**: Mostra uma dica quando as mensagens são traduzidas automaticamente

## Gírias Suportadas
O plugin suporta centenas de termos e expressões de gírias, incluindo:
- Abreviações comuns de texto/chat (lol, brb, afk, etc.)
- Gírias e terminologia das redes sociais
- brainrot

## Contribuindo
Como contribuir!

### Adicionando Novos Termos de Gíria
Você pode expandir o dicionário adicionando mais termos de gíria aos arquivos de idioma existentes.

### Adicionando Suporte para Novos Idiomas
Para adicionar suporte a um novo idioma:
1. Crie um novo arquivo na pasta `slangDictionaries` (por exemplo, `en-es.ts` para inglês para espanhol)
2. Defina o dicionário de gírias usando o mesmo formato dos dicionários existentes
3. Atualize as configurações para incluir a opção do novo idioma

Pull requests para novos idiomas são bem-vindos!

## Créditos
Criado por [redlovespython](https://github.com/redlovespython)
Construído para [Vencord](https://github.com/Vendicated/Vencord)
Inspirado por [Translate](https://github.com/Vendicated/Vencord/tree/main/src/plugins/translate)
