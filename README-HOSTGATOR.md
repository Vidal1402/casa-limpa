# Instruções para Upload na Hostgator

## Arquivos para Upload

Para fazer o upload do site na Hostgator, você precisa enviar os seguintes arquivos e pastas:

### Estrutura de Arquivos:
```
/
├── index.html          (arquivo principal)
├── css/
│   └── style.css      (estilos do site)
├── js/
│   └── script.js      (scripts JavaScript)
└── public/            (pasta com todas as imagens)
    ├── images/
    │   ├── casa-limpa-2-removebg-preview.png
    │   └── casa-limpa-banner.png
    ├── icon-light-32x32.png
    └── apple-icon.png
```

## Passo a Passo para Upload

### 1. Acesse o File Manager da Hostgator

1. Faça login no painel de controle da Hostgator (cPanel)
2. Procure por "File Manager" ou "Gerenciador de Arquivos"
3. Navegue até a pasta `public_html` (esta é a pasta raiz do seu site)

### 2. Faça Upload dos Arquivos

**Opção A: Via File Manager (Interface Web)**
1. Clique em "Upload" no File Manager
2. Selecione os arquivos:
   - `index.html`
   - Pasta `css` com o arquivo `style.css`
   - Pasta `js` com o arquivo `script.js`
   - Pasta `public` completa (com todas as imagens)

**Opção B: Via FTP (Recomendado para muitos arquivos)**
1. Use um cliente FTP como FileZilla, WinSCP ou Cyberduck
2. Conecte-se usando as credenciais FTP fornecidas pela Hostgator
3. Navegue até a pasta `public_html`
4. Faça upload de todos os arquivos mantendo a estrutura de pastas

### 3. Verifique a Estrutura

Após o upload, a estrutura na Hostgator deve ficar assim:

```
public_html/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── public/
    ├── images/
    │   ├── casa-limpa-2-removebg-preview.png
    │   └── casa-limpa-banner.png
    ├── icon-light-32x32.png
    └── apple-icon.png
```

### 4. Teste o Site

1. Acesse seu domínio no navegador (ex: `https://seudominio.com.br`)
2. Verifique se todas as imagens estão carregando corretamente
3. Teste os links do WhatsApp
4. Teste o menu mobile (em dispositivos móveis ou redimensionando a janela)
5. Teste o FAQ (clicar nas perguntas para expandir)

## Observações Importantes

- **Caminhos das Imagens**: Os caminhos das imagens estão configurados como relativos (ex: `public/images/...`). Se você colocar os arquivos em uma subpasta, ajuste os caminhos no `index.html`.

- **WhatsApp**: Verifique se o número de WhatsApp está correto no HTML (atualmente: 21 97975-0896). Se precisar alterar, procure por `5521979750896` no arquivo `index.html`.

- **Redes Sociais**: Os links do Facebook e Instagram estão como placeholders (`https://facebook.com` e `https://instagram.com`). Atualize com os links reais das redes sociais da Casa Limpa.

- **SEO**: O arquivo já está otimizado com meta tags para SEO, mas você pode adicionar mais informações se necessário.

## Suporte

Se encontrar algum problema durante o upload ou tiver dúvidas, entre em contato com o suporte da Hostgator ou verifique a documentação deles sobre upload de arquivos.
