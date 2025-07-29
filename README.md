# Amigo Secreto — Aplicação Web para Sorteios Interativos

[Acesse o projeto online na Vercel](https://jogo-amigo-secreto-gules.vercel.app)

Este projeto é uma aplicação web simples e funcional para sorteios de **amigo secreto**, desenvolvida com foco em usabilidade, código limpo e estilo moderno. A interface permite cadastrar nomes, sortear participantes de forma aleatória e gerenciar os resultados de maneira clara e prática.

* * *

Contexto Educacional
--------------------

Este projeto foi desenvolvido como **resultado do curso de lógica de programação do Programa ONE (Oracle Next Education)**. O objetivo foi aplicar na prática os principais conceitos de lógica computacional, estruturas de repetição, condicionais e manipulação de listas, utilizando **HTML, CSS e JavaScript puro**.

* * *

Funcionalidades
---------------

* Adição de nomes com botão ou tecla Enter

* Exibição dinâmica da lista de participantes

* Sorteio de um nome aleatório por vez

* Remoção automática do nome sorteado da lista

* Botão para limpar a lista e reiniciar o sorteio

* Interface responsiva e visualmente agradável

* Animação suave ao exibir o nome sorteado

* * *

Como Utilizar
-------------

1. Digite o nome de um participante no campo de entrada

2. Clique em "Adicionar" ou pressione **Enter**

3. Repita para todos os nomes desejados

4. Clique em **"Sortear amigo"**
   
   * Um nome aleatório será exibido e removido da lista

5. Continue sorteando até restar apenas um nome

6. Clique em **"Limpar Lista"** para reiniciar

* * *

Tecnologias Utilizadas
----------------------

* **HTML5** — Estrutura semântica da página

* **CSS3** — Estilização com variáveis, responsividade e animações

* **JavaScript (Vanilla JS)** — Lógica de controle da aplicação

* **Google Fonts** — Fontes Inter e Merriweather para tipografia

* * *

Estrutura do Projeto
--------------------

    .
    ├── README.md                  # Este arquivo de documentação
    ├── app.js                    # Lógica da aplicação (JS puro)
    ├── index.html                # Estrutura principal da interface
    ├── style.css                 # Estilização visual moderna
    └── assets/                   # Arquivos visuais utilizados
        ├── amigo-secreto.png         # Imagem decorativa principal
        └── play_circle_outline.png   # Ícone usado no botão de sorteio

* * *

Melhorias Implementadas
-----------------------

Em relação à estrutura básica original proposta no curso, foram realizadas as seguintes melhorias:

* **Entrada via tecla Enter** para melhor usabilidade

* **Validação de entrada**: impede nomes vazios e duplicados

* **Remoção automática** do nome sorteado da lista

* **Animação visual** no resultado sorteado

* **Separação de responsabilidades** entre HTML, CSS e JS

* **Botão adicional para limpar a lista**

* **Layout centralizado, responsivo e acessível**

* * *

Personalização
--------------

A imagem `assets/amigo-secreto.png` pode ser substituída por qualquer outra de sua preferência. O mesmo vale para o ícone `play_circle_outline.png`, que pode ser alterado para outro símbolo ou SVG compatível com seu estilo visual.

* * *

Licença
-------

Este projeto é livre para uso e modificação. Sinta-se à vontade para utilizar, estudar e expandir este código conforme necessário, especialmente para fins educacionais. 
