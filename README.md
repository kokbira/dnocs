Esta extensão foi desenvolvida pela Equipe de Desenvolvimento do Serviço de Tecnologia da Informação do DNOCS em 2024/09/24.

Desenvolvimento assistido por Microsoft Copilot.

Imagens geradas com DALL-E

Ajuda

Os Portais gov.br utilizam o componente FontAwesome de use.fontawesome.com/css/all.css, porém um bloqueio de setembro/2024 de acesso de algumas operadoras impede que a rede de algumas instituições acesse tal endereço, o que gera um lag no carregamento por cada acesso a esses portais nos navegadores de mais de 30 segundos e a falta de exibição de alguns ícones, como o item de menu dos portais.

Esta extensão é uma solução de contorno ao problema substituindo o css do FontAwesome para outro endereço (que deve obedecer o CORS), como a URL default https://sso.acesso.gov.br/assets/govbr/fontawesome/css/all.min.css, mas que resolverá apenas a exibição dos ícones de FontAwesome.

Para solucionar o lag de carregamento, deve-se forçar o bloqueio de use.fontawesome.com/css/all.css (por exemplo DNS ou firewall). Assim, o navegador não alcança de imediato a localização e logo em seguida o css é alterado.

Licença

The MIT License (MIT)

Copyright (c) 2024 Serviço de Tecnologia da Informação - STI / Departamento
Nacional de Obras Contra as Secas - DNOCS

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
