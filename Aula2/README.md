# Sistema de Cadastro e Gestão de Eventos

Requisitos Funcionais:

    RF01 - Cadastro de Usuário

| ID   | Requisito | Descrição                    | Entrada                                      | Resultado Esperado                       | Tipo     |
| ---- | --------- | ---------------------------- | -------------------------------------------- | ---------------------------------------- | -------- |
| CT01 | RF01      | Cadastro com dados válidos   | Nome, email único, senha válida, data válida | Usuário registrado com sucesso           | Positivo |
| CT02 | RF01      | Cadastro com email duplicado | Email já existente                           | Sistema deve bloquear o cadastro         | Negativo |
| CT03 | RF01      | Campo nome vazio             | Nome não informado                           | Sistema deve apresentar mensagem de erro | Negativo |
| CT04 | RF01      | Email inválido               | "emailsemformato"                            | Sistema deve recusar o cadastro          | Negativo |
| CT05 | RF01      | Senha fora do padrão         | "123"                                        | Sistema deve invalidar a senha           | Negativo |
| CT06 | RF01      | Data de nascimento inválida  | "14/02/1440"                                 | Sistema deve rejeitar a data informada   | Negativo |
| CT07 | RF01      | Limite de caracteres no nome | Nome excessivamente longo                    | Sistema deve aplicar validação de limite | Negativo |

    RF02 - Login de Usuário 

| ID   | Requisito | Descrição                | Entrada                     | Resultado Esperado                   | Tipo     |
| ---- | --------- | ------------------------ | --------------------------- | ------------------------------------ | -------- |
| CT08 | RF02      | Login com dados corretos | Email e senha válidos       | Acesso concedido ao usuário          | Positivo |
| CT09 | RF02      | Senha incorreta          | Email válido + senha errada | Sistema deve negar o acesso          | Negativo |
| CT10 | RF02      | Email não cadastrado     | Email inexistente           | Sistema deve impedir o login         | Negativo |
| CT11 | RF02      | Campos vazios            | Email e senha vazios        | Sistema deve solicitar preenchimento | Negativo |

    RF03 - Cadastro de Evento

| ID   | Requisito | Descrição                        | Entrada                                 | Resultado Esperado                     | Tipo     |
| ---- | --------- | -------------------------------- | --------------------------------------- | -------------------------------------- | -------- |
| CT12 | RF03      | Cadastro válido                  | Nome, descrição, data futura, vagas > 0 | Evento cadastrado com sucesso          | Positivo |
| CT13 | RF03      | Data no passado                  | Data já ocorrida                        | Sistema deve recusar o cadastro        | Negativo |
| CT14 | RF03      | Número de participantes inválido | Valor negativo ou zero                  | Sistema deve invalidar a quantidade    | Negativo |
| CT15 | RF03      | Campos obrigatórios vazios       | Nome ou data não informados             | Sistema deve exigir preenchimento      | Negativo |
| CT16 | RF03      | Nome muito longo                 | Texto extenso                           | Sistema deve limitar o tamanho do nome | Negativo |

    RF04 - Listagem de Eventos

| ID   | Requisito | Descrição                 | Entrada                  | Resultado Esperado                        | Tipo     |
| ---- | --------- | ------------------------- | ------------------------ | ----------------------------------------- | -------- |
| CT17 | RF04      | Listar eventos existentes | Eventos cadastrados      | Eventos exibidos corretamente na lista    | Positivo |
| CT18 | RF04      | Listar sem eventos        | Nenhum evento cadastrado | Sistema deve apresentar lista vazia       | Positivo |
| CT19 | RF04      | Verificar campos exibidos | Eventos cadastrados      | Informações (nome, data e vagas) visíveis | Positivo |

    RF05 - Inscrição em Evento

| ID   | Requisito | Descrição               | Entrada                                 | Resultado Esperado                    | Tipo     |
| ---- | --------- | ----------------------- | --------------------------------------- | ------------------------------------- | -------- |
| CT20 | RF05      | Inscrição válida        | Usuário autenticado + evento disponível | Inscrição efetuada com sucesso        | Positivo |
| CT21 | RF05      | Inscrição duplicada     | Mesmo usuário no mesmo evento           | Sistema deve impedir duplicidade      | Negativo |
| CT22 | RF05      | Evento lotado           | Evento sem vagas                        | Sistema deve bloquear a inscrição     | Negativo |
| CT23 | RF05      | Evento já ocorrido      | Data passada                            | Sistema deve impedir inscrição tardia | Negativo |
| CT24 | RF05      | Usuário não autenticado | Sem login                               | Sistema deve exigir autenticação      | Negativo |

    RF06 - Cancelamento de Inscrição

| ID   | Requisito | Descrição                   | Entrada                | Resultado Esperado                           | Tipo     |
| ---- | --------- | --------------------------- | ---------------------- | -------------------------------------------- | -------- |
| CT25 | RF06      | Cancelamento válido         | Usuário inscrito       | Inscrição cancelada com sucesso              | Positivo |
| CT26 | RF06      | Cancelar sem inscrição      | Usuário não inscrito   | Sistema deve impedir a ação                  | Negativo |
| CT27 | RF06      | Verificar liberação de vaga | Cancelamento realizado | Sistema deve atualizar a quantidade de vagas | Positivo |

Requisitos Não Funcionais:

    RNF01 - Validação de Campos

| ID   | Requisito | Descrição                  | Entrada              | Resultado Esperado                       | Tipo     |
| ---- | --------- | -------------------------- | -------------------- | ---------------------------------------- | -------- |
| CT28 | RNF01     | Campos obrigatórios vazios | Qualquer campo vazio | Sistema deve alertar sobre preenchimento | Negativo |


    RNF02 - Segurança de Senha

| ID   | Requisito | Descrição             | Entrada       | Resultado Esperado             | Tipo     |
| ---- | --------- | --------------------- | ------------- | ------------------------------ | -------- |
| CT29 | RNF02     | Senha válida          | "Ederson_67"  | Senha aceita pelo sistema      | Positivo |
| CT30 | RNF02     | Sem maiúscula         | "ederson_67"  | Sistema deve rejeitar a senha  | Negativo |
| CT31 | RNF02     | Sem número            | "Edersonnnnn" | Sistema deve invalidar a senha | Negativo |
| CT32 | RNF02     | Menos de 8 caracteres | "Eder"        | Sistema deve recusar a senha   | Negativo |

    RNF03 - Tempo de Resposta

| ID   | Requisito | Descrição         | Entrada                    | Resultado Esperado                       | Tipo     |
| ---- | --------- | ----------------- | -------------------------- | ---------------------------------------- | -------- |
| CT33 | RNF03     | Tempo de listagem | Muitos eventos cadastrados | Sistema deve responder em até 2 segundos | Positivo |


    RNF04 - Compatibilidade

| ID   | Requisito | Descrição | Entrada           | Resultado Esperado                 | Tipo     |
| ---- | --------- | --------- | ----------------- | ---------------------------------- | -------- |
| CT34 | RNF04     | Chrome    | Acesso ao sistema | Funcionamento correto no navegador | Positivo |
| CT35 | RNF04     | Firefox   | Acesso ao sistema | Funcionamento adequado             | Positivo |
| CT36 | RNF04     | Edge      | Acesso ao sistema | Execução sem falhas                | Positivo |


    RNF05 - Integridade de Dados
    
| ID   | Requisito | Descrição                      | Entrada        | Resultado Esperado                       | Tipo     |
| ---- | --------- | ------------------------------ | -------------- | ---------------------------------------- | -------- |
| CT37 | RNF05     | Verificar duplicidade de email | Email repetido | Sistema deve evitar registros duplicados | Negativo |
