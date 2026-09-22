[LEIA-ME.md](https://github.com/user-attachments/files/32508974/LEIA-ME.md)
# PLE — versão instalável

Esta pasta é a aplicação PLE pronta a publicar e a instalar como app.

## Ficheiros

- `index.html` — a aplicação completa (funciona sozinha, sem internet)
- `manifest.json` — nome, ícones e cores da app
- `_headers` — indica ao alojamento como servir cada ficheiro (necessário para a instalação)
- `sw.js` — permite abrir a app sem ligação à internet
- `icone-192.png`, `icone-512.png`, `icone-maskable-512.png` — ícones

## Publicar (escolhe uma via)

**Netlify Drop** — o mais rápido, sem conta obrigatória
1. Abre `app.netlify.com/drop`
2. Arrasta esta pasta para a página
3. Recebes um endereço `https://…netlify.app`

**GitHub Pages**
1. Cria um repositório novo e envia o conteúdo desta pasta
2. Settings → Pages → Branch: `main`, pasta `/root`
3. O endereço fica disponível em poucos minutos

Qualquer alojamento com `https` serve. É obrigatório `https` — sem isso o
navegador não permite instalar a app nem guardá-la para uso offline.

## Instalar

**iPad / iPhone (Safari)**
Abre o endereço → botão Partilhar → «Adicionar ao ecrã principal».
A app abre em ecrã inteiro, sem barra do navegador.

**Computador (Chrome ou Edge)**
Abre o endereço → ícone de instalação na barra de endereço → Instalar.

**Android (Chrome)**
Abre o endereço → menu → «Instalar aplicação».

## Onde ficam os dados

Os dados ficam guardados apenas no dispositivo onde a app foi instalada,
no armazenamento local do navegador. Não são enviados para nenhum servidor.
Consequências práticas:

- cada iPad tem os seus próprios dados, não há sincronização entre dispositivos;
- exporta o CSV com regularidade para ter cópia de segurança;
- apagar os dados do site ou desinstalar a app apaga os registos.

## Reunir os dados de vários iPads

A aplicação importa as exportações de outros dispositivos:

1. em cada iPad: Crianças → «Exportar CSV — respostas item a item»;
2. enviar os ficheiros para o dispositivo da coordenação;
3. nesse dispositivo: Crianças → «Importar CSV de respostas».

Avaliações já registadas não são duplicadas e avaliações incompletas não
são importadas; o resumo da importação indica o que entrou e o que ficou
de fora. Não há sincronização automática — a junção é feita quando a
coordenação quiser.

## Publicar uma versão nova

Substitui os ficheiros no alojamento e incrementa `VERSAO` em `sw.js`
(por exemplo `ple-v2`). Os dispositivos atualizam no arranque seguinte.
Os dados guardados não se perdem.
