# React Feed

Projeto de estudo de react que aborda conhecimentos introdutórios de react com typescript como:

- **Props:**
  As propriedades que sao passadas a um componente
- **Estate:**
  O estado armazena valores no REACT, e para alterar esse valor do estado vc usa o setEstado, o setEstado também informa ao REACT que ele deve re-renderizar o componente, ao setar um estado vc nao informa o que vc deseja inserir, vc passa o novo valor do estado
- **Tipagem de atributos HTML:**
  O React possui uma tipagem para os elementos html e para os atributos das tags.
- **Key:**
  A key deve ser única, é utilizada pelo react como marcador de itens numa lista, para re-renderização de componentes
- **Programação Imperativa:**
  O que deve ser feito passo a passo( como atingir um resultado final ).
- **Programação declarativa:** 
  Quais as condições para eu ter o resultado final.
- **imutabilidade:**
  As variáveis nao sofrem mutação(modificação), nos criamos um novo valor(um novo espaço na memoria), com isso o react possui duas versões do estado e pode comparar suas mudanças.


O React se programa de forma declarativa, pois se programa de acordo com as condições.

## Key

Existem 3 momentos em que um componentes é re-renderizado:
- Quando o estado muda
- Quando a propriedade muda
- Quando um componente pai re-renderiza

A key precisa ser única pois, quando um componente re-renderiza o react verifica se ha mudanças numa lista ja apresentada, se nao houver mudança nas keys, esse componente nao sera re-renderizado pois nao houve mudança, por isso nao se deve usar o indices dos array como key, pois nao sao únicos.

keys = [1,2,3,4]
keysReRenderizadas = [1,2,3,4,5]

em cada re-renderização o react vai comparar as keys ja renderizadas com as novas keys, da key 1 -4 ja estavam renderizadas então o react nao as renderiza novamente, mas a key 5 nao estava renderizada então o react somente a renderiza, apresentado na tela uma lista com as keysReRenderizadas





Esse projeto de estudo faz parte da trilha de especialização de React da Rocketseat trilha React - atualização de 2022