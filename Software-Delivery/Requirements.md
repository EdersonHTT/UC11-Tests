# Sistema de Delivery

## Requisitos Funcionais
- 01: O sistema deve permitir a criação de contas
- 02: Usuários devem conseguir realizar login na plataforma
- 03: Será possível editar informações do peil
- 04: O sistema deve oferecer busca de restaurantes
- 05: O cardápio dos restaurantes deve ser exibido ao usuário
- 06: Deve ser possível adicionar e remover itens do carrinho
- 07: O usuário poderá finalizar pedidos pelo sistema
- 08: O sistema deve disponibilizar diferentes formas de pagamento
- 09: O acompanhamento do pedido deve estar disponível
- 10: O usuário terá a opção de avaliar pedidos realizados

---

## Requisitos Não Funcionais
- 01: O sistema deve responder de forma rápida às requisições
- 02: A aplicação deve suportar crescimento de usuários
- 03: Dados devem ser protegidos contra acessos não autorizados
- 04: O sistema deve permanecer disponível na maior parte do tempo
- 05: A interface deve ser simples e intuitiva
- 06: A manutenção do sistema deve ser facilitada
- 07: A aplicação deve funcionar em diferentes dispositivos
- 08: O sistema deve apresentar comportamento confiável
- 09: Deve ser possível executar o sistema em diferentes ambientes
- 10: As informações devem permanecer íntegras e consistentes

---

# Testes

## Testes de Cadastro de Usuário
- 01: Deve permitir cadastro com dados válidos
- 02: Deve impedir cadastro com e-mail já existente
- 03: Deve validar formato de e-mail inválido
- 04: Deve impedir campos obrigatórios vazios
- 05: Deve permitir login após cadastro realizado
- 06: Deve validar confirmação de senha

---

## Testes de Movimentação de Entrega
- 01: Deve permitir ao entregador aceitar uma entrega
- 02: Deve permitir ao entregador recusar uma entrega
- 03: Deve atualizar status do pedido corretamente
- 04: Deve impedir avanço de status fora da ordem correta
- 05: Deve notificar o cliente sobre mudanças no pedido
- 06: Deve registrar histórico da entrega