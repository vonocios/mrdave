# Mr. Dave Idiomas — Documentação do Projeto

Plataforma web para a escola **Mr. Dave Idiomas**, com landing page institucional e área do aluno completa. Os cursos oferecidos são **USpeaK** (inglês) e **Aquí Tú Hablas** (espanhol).

---

## Estrutura de Arquivos

```
/
├── index.html        → Landing page principal
├── area-aluno.html   → Área do aluno (dashboard)
├── styles.css        → Estilos globais (landing page)
├── area-aluno.css    → Estilos do dashboard
├── script.js         → JavaScript da landing page
└── area-aluno.js     → JavaScript do dashboard
```

---

## Como rodar localmente

Não há dependências de servidor ou build. Basta abrir o `index.html` diretamente no navegador, ou usar uma extensão como **Live Server** no VS Code para simular um servidor local (recomendado para evitar restrições de CORS no TTS).

---

## Login na Área do Aluno

O sistema de login é atualmente um **placeholder**. Qualquer e-mail e senha são aceitos — o objetivo é permitir testes do dashboard sem backend.

Para acessar: clique em **"Área do Aluno"** no menu ou vá direto para `area-aluno.html`, digite qualquer e-mail e qualquer senha e clique em **Entrar**.

> Quando migrar para WordPress, substituir a lógica de login no `area-aluno.js` por uma chamada à API de autenticação do WP (JWT Auth ou similar).

---

## Dados do Aluno (Placeholder)

No topo do arquivo `area-aluno.js`, há um objeto chamado `DADOS_ALUNO` que controla as informações exibidas no dashboard:

```js
const DADOS_ALUNO = {
    nome: 'João Silva',
    email: 'joao@email.com',
    curso: 'uspeaK',      // 'uspeaK' ou 'aquiTuHablas'
    temDebito: false,     // true = exibe alerta financeiro
    valorDebito: 159.99,
};
```

Troque esses valores para testar diferentes cenários. Quando o `temDebito` for `true`, um banner de alerta aparece no topo do dashboard e um badge de `!` aparece no menu lateral em **Financeiro**.

---

## Progresso das Aulas (Checkbox Assistido)

O status de cada aula (assistida ou não) é salvo no **localStorage** do navegador. Isso significa que o progresso persiste entre sessões no mesmo dispositivo e navegador.

A chave usada segue o padrão:
```
mrdave_progresso → { "uspeaK_aula_1": true, "uspeaK_aula_2": false, ... }
```

> No WordPress, substituir as funções `getProgressoStorage()` e `salvarProgresso()` por chamadas à REST API, salvando o progresso no banco de dados do usuário.

---

## Text-to-Speech (TTS)

O TTS usa a **Web Speech API**, que é nativa do navegador — sem bibliotecas externas. Funciona melhor no **Google Chrome** e no **Microsoft Edge**. No Firefox o suporte é parcial.

As 4 vozes disponíveis são:
- 🇺🇸 EN / US — Inglês americano
- 🇬🇧 EN / UK — Inglês britânico
- 🇪🇸 ES / Spain — Espanhol da Espanha
- 🇲🇽 ES / México — Espanhol mexicano

O TTS está disponível tanto na **página de cada aula** quanto na aba **Material do Curso**.

---

## Tabela de Preços

Os preços são renderizados via HTML estático em `index.html`, organizados em 4 abas:

| Aba | Modalidade | Aulas/mês |
|---|---|---|
| Aulas Regulares — 1x/semana | Individual, Dupla, Turma | 4 |
| Aulas Regulares — 2x/semana | Individual, Dupla, Turma | 8 |
| Conversação — 1x/semana | Individual, Dupla, Turma | 4 |
| Teens — 2x/semana | Individual, Dupla, Turma | 8 |

Cada botão de preço abre o WhatsApp com uma mensagem pré-preenchida identificando o plano de interesse.

---

## Contato e WhatsApp

O número de WhatsApp e o e-mail da escola estão definidos diretamente no HTML. Para atualizar:

- **WhatsApp:** buscar por `5512988336873` em ambos os arquivos HTML e no `script.js`
- **E-mail:** buscar por `mrdaveidiomas@gmail.com`

O botão flutuante do WhatsApp aparece em todas as páginas e pode ser atualizado programaticamente via:

```js
window.updateWhatsApp('5512988336873');
```

---

## Migração para WordPress

Todos os pontos de integração estão marcados com comentários `// WP:` nos arquivos JS e `<!-- WP: -->` nos HTMLs. Os principais pontos são:

- `wp_head()` e `wp_footer()` nos templates
- `wp_enqueue_style()` e `wp_enqueue_scripts()` para CSS e JS
- `wp_localize_script()` para passar dados do PHP para o JS (dados do aluno, aulas, etc.)
- Autenticação via **JWT Auth** ou plugin de membership (MemberPress, LearnDash, etc.)
- Progresso de aulas via **REST API** do WordPress
- Formulário de contato via **Contact Form 7** ou **WPForms**

---

## Cores e Identidade Visual

As cores principais estão definidas como variáveis CSS no topo de `styles.css`:

```css
--color-primary: #6366f1;       /* Roxo principal */
--color-primary-dark: #4f46e5;
--color-primary-light: #818cf8;
--color-accent: #ec4899;        /* Rosa accent */
--color-secondary: #f59e0b;     /* Amarelo */
```

Para adaptar a identidade visual da escola, basta alterar essas variáveis.

---

*Documentação escrita e projeto desenvolvido por **Itallo Carvalho**.*
