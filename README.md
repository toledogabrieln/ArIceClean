# AR ICE CLEAN - Website

Site profissional para a empresa AR ICE CLEAN, especialista em climatização e ar-condicionado em São Paulo.

## 📋 Características

- ✅ Design responsivo (Mobile, Tablet, Desktop)
- ✅ Otimizado para SEO
- ✅ Performance otimizada
- ✅ Formulário de contato funcional
- ✅ Menu mobile hamburger
- ✅ Animações suaves
- ✅ Botão WhatsApp flutuante
- ✅ Compatível com Softaculous/InfocoHost
- ✅ Zero dependências externas (HTML, CSS, JS puro)

## 📁 Estrutura do Projeto

```
ArIceClean/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── script.js       # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🚀 Instalação no Softaculous (InfocoHost)

### Passo 1: Preparar os arquivos
1. Faça download de todos os arquivos do repositório
2. Certifique-se de que a estrutura de pastas está correta:
   - `index.html` (raiz)
   - `css/style.css`
   - `js/script.js`

### Passo 2: Upload via Softaculous
1. Acesse o painel de controle da sua hospedagem (InfocoHost)
2. Navegue até **Softaculous** ou **File Manager**
3. Faça upload de todos os arquivos mantendo a estrutura de diretórios
4. Certifique-se de que `index.html` está na raiz do domínio

### Passo 3: Configurar o formulário de contato
1. Acesse [Formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Configure um novo formulário
4. Copie o ID do formulário
5. No arquivo `js/script.js`, procure por `YOUR_FORM_ID` (linha ~108)
6. Substitua `YOUR_FORM_ID` pelo ID que você copiou
7. Faça upload do arquivo atualizado

**Exemplo:**
```javascript
// Antes:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {

// Depois:
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

## 📱 Números de Contato

Todos os links de WhatsApp estão configurados para: **+55 11 2283-2633**

Para alterar, procure por `https://wa.me/551122832633` nos arquivos e substitua pelo número desejado.

**Formato correto:** `https://wa.me/55AABBNNNNNNNN`
- 55 = código do Brasil
- AA = código da área (ex: 11 para São Paulo)
- BBNNNNNNNN = número telefônico sem formatação

## 🎨 Customização

### Alterar cores principais
No arquivo `css/style.css`, altere o valor `#1e88e5` para a cor desejada. Exemplos:

- **Azul (padrão):** `#1e88e5`
- **Verde:** `#4caf50`
- **Laranja:** `#ff9800`
- **Vermelho:** `#f44336`

### Alterar textos
Edite o arquivo `index.html` e procure pelas seções:
- `<!-- ===== HERO ===== -->` - Seção principal
- `<!-- ===== SERVIÇOS ===== -->` - Serviços oferecidos
- `<!-- ===== SOBRE ===== -->` - Sobre a empresa
- `<!-- ===== DEPOIMENTOS ===== -->` - Testemunhos de clientes

### Adicionar logo customizada
1. Salve sua logo em `images/logo.png`
2. No `index.html`, procure por `<span class="logo-mark" aria-hidden="true">`
3. Substitua o SVG pela tag: `<img src="images/logo.png" alt="AR ICE CLEAN">`
4. Ajuste o CSS em `css/style.css` conforme necessário

## 📞 Números de Telefone

Atualmente configurados:
- WhatsApp: `(11) 2283-2633`
- Tel 1: `(11) 2283-1379`
- Tel 2: `(11) 2283-2835`

Para alterar, procure por estes números em `index.html` e substitua.

## 🔐 SSL/HTTPS

Certifique-se de que seu domínio possui certificado SSL válido. A maioria dos provedores (incluindo InfocoHost) oferece isso gratuitamente via Let's Encrypt.

## ⚡ Performance

O site foi otimizado para máxima performance:
- Código CSS/JS minificado automaticamente pelos navegadores
- Zero requisições de bibliotecas externas
- Lazy loading de imagens
- Cache-friendly structure

**Dicas para melhorar ainda mais:**
1. Ative compressão GZIP no servidor
2. Configure cache do navegador
3. Use CDN para servir arquivos estáticos
4. Comprima imagens antes de fazer upload

## 🔍 SEO

O site inclui:
- Meta tags otimizadas
- Estrutura semântica HTML5
- Schema.org microdata
- Mobile-friendly design
- Fast loading times

### Melhorias recomendadas:
1. Adicione Google Analytics (descomente no `js/script.js`)
2. Configure Google Search Console
3. Crie arquivo `sitemap.xml`
4. Crie arquivo `robots.txt`

## 📧 Formulário de Contato

O formulário utiliza **Formspree** (serviço gratuito):
- Sem backend necessário
- Suporta até 50 submissões/mês gratuitamente
- Fácil de configurar
- SPAM protection incluída

Para usar um serviço diferente:
1. Altere a URL em `js/script.js` (função `initForm`)
2. Ajuste o método de envio conforme documentação do serviço

## 🌐 Navegadores Suportados

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)
- IE 11 (com polyfills limitados)

## 📱 Responsividade

Breakpoints:
- **Desktop:** 1024px+
- **Tablet:** 768px - 1024px
- **Mobile:** até 768px
- **Extra pequeno:** até 480px

## 🐛 Troubleshooting

### Formulário não envia
1. Verifique se o ID do Formspree está correto
2. Verifique se o Formspree está configurado corretamente
3. Veja o console do navegador (F12) para erros

### Estilos não carregam
1. Verifique se `css/style.css` está no caminho correto
2. Limpe o cache do navegador (Ctrl+Shift+Del)
3. Verifique permissões de arquivo (644 para CSS/JS)

### JavaScript não funciona
1. Verifique se `js/script.js` está no caminho correto
2. Abra o console (F12) e veja se há erros
3. Certifique-se de que JavaScript está habilitado

### Imagens não aparecem
1. Verifique o caminho da imagem
2. Certifique-se de que a imagem existe no servidor
3. Verifique permissões de arquivo (644)

## 📄 Licença

Este projeto é fornecido como está para uso profissional.

## 👨‍💻 Suporte

Para dúvidas sobre hospedagem e Softaculous:
- Contate o suporte da InfocoHost
- Email: suporte@infocohost.com.br
- Site: https://www.infocohost.com.br

## 📝 Changelog

### v1.0 (2026-08-20)
- ✅ Versão inicial completa
- ✅ HTML, CSS, JS funcional
- ✅ Formulário de contato integrado
- ✅ Responsivo e otimizado
- ✅ Pronto para produção

---

**Desenvolvido com ❤️ para AR ICE CLEAN**
