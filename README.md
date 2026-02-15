# Landing Page - Conselho Tutelar

Landing page institucional para o Conselho Tutelar, desenvolvida com foco em transparência, acessibilidade e responsividade mobile-first.

## 📋 Características

- ✅ Design responsivo (prioridade mobile)
- ✅ Acessibilidade (ARIA labels, navegação por teclado)
- ✅ Canais de emergência em destaque (Disque 100)
- ✅ FAQ interativo com accordion
- ✅ Seções de transparência e documentação
- ✅ Guia completo de denúncias
- ✅ Informações sobre atribuições legais do Conselho

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Para desenvolvimento local, você pode usar um servidor HTTP simples:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   ```

## 🎨 Personalização

### Informações de Contato

Edite as seguintes seções no arquivo `index.html`:

1. **Cabeçalho - Logos:**
   ```html
   <div class="logo-placeholder">
       <span class="logo-text">Prefeitura</span>
   </div>
   ```
   Substitua pelos logos reais da Prefeitura e do Conselho Tutelar.

2. **Plantão Local:**
   ```html
   <p class="plantao-phone">(XX) XXXX-XXXX</p>
   ```

3. **Endereço e Contato:**
   Procure pela seção `#contato` e atualize:
   - Endereço completo
   - Telefones
   - E-mail institucional
   - Horário de funcionamento

### Integração com Google Maps

Na seção de contato, substitua o placeholder do mapa:

```html
<iframe 
    src="https://maps.app.goo.gl/K2wWjFzA4m9HBuKN8" 
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

Para obter o código do mapa:
1. Acesse [Google Maps](https://www.google.com/maps)
2. Localize o endereço do Conselho Tutelar
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o código do iframe

### Conselheiros em Exercício

Na seção de Transparência, atualize a lista de conselheiros:

```html
<div class="conselheiro-item">
    <strong>Nome do Conselheiro</strong>
    <span>Período: 2024-2028</span>
</div>
```

### Cores e Identidade Visual

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #1e40af;      /* Cor principal */
    --primary-dark: #1e3a8a;       /* Cor principal escura */
    --secondary-color: #dc2626;    /* Cor de emergência */
    --accent-color: #f59e0b;       /* Cor de destaque */
}
```

### Documentos e Downloads

Atualize os links na seção "Downloads e Legislação":

- ECA: Link já aponta para o site oficial do Planalto
- Portarias locais: Adicione links para documentos reais
- Modelos de autorização: Faça upload dos arquivos e atualize os links

## 📱 Responsividade

A página é totalmente responsiva e otimizada para:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## ♿ Acessibilidade

- Navegação por teclado
- ARIA labels em elementos interativos
- Contraste adequado de cores
- Suporte a leitores de tela
- Animações respeitam preferências do usuário (prefers-reduced-motion)

## 🔧 Estrutura de Arquivos

```
conselho-tutelar/
│
├── index.html      # Estrutura HTML principal
├── styles.css      # Estilos e design responsivo
├── script.js       # Interatividade e funcionalidades
└── README.md       # Este arquivo
```

## 📝 Seções da Página

1. **Cabeçalho Institucional** - Logos e navegação
2. **Canais de Emergência** - Disque 100 e plantão local
3. **Como Denunciar** - Guia completo de denúncias
4. **Atribuições do Órgão** - O que fazemos (Art. 131 e 136 do ECA)
5. **Transparência** - Editais, processo de escolha, conselheiros
6. **FAQ** - Perguntas frequentes interativas
7. **Downloads** - Legislação e documentos
8. **Contato** - Localização e informações de contato

## 🎯 Funcionalidades JavaScript

- Menu mobile responsivo
- FAQ com accordion
- Scroll suave entre seções
- Destaque da seção ativa no menu
- Animações de entrada para cards
- Suporte a teclado (ESC fecha menu)

## 📚 Referências Legais

- **Estatuto da Criança e do Adolescente (ECA)** - Lei nº 8.069/90
- **Art. 131** - Definição do Conselho Tutelar
- **Art. 136** - Atribuições do Conselho Tutelar

## 🔒 Segurança e Privacidade

- Não coleta dados pessoais
- Links externos usam `rel="noopener"`
- Formulários (se adicionados) devem seguir LGPD

## 📞 Suporte

Para dúvidas sobre implementação ou personalização, consulte a documentação ou entre em contato com a equipe de desenvolvimento.

## 📄 Licença

Este projeto foi desenvolvido para uso institucional do Conselho Tutelar.

---

**Desenvolvido com foco em transparência e acesso à informação pública**
