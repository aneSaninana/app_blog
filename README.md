
**Documentação da API de Blog**

----------

### **Introdução**

Esta API permite a gestão de usuários e posts para um sistema de blog simples.

----------

### **Base URL**








```
http://localhost:8081/

```

----------

### **Endpoints**

#### **Usuários**

1.  **Criar um usuário**

-   **URL:**  `/usuarios`
-   **Método:**  `POST`
-   **Body:**

```json
{
    "nome" : "Marcia",
	"email" : "joao@example.com",
}

```

-   **Resposta de Sucesso:**

```json
{
    "id" : 1,
	"nome" : "Marcia",
	"email" : "joao@example.com",
	"createdAt" : "2023-08-14 20:53:44",
	"updatedAt" : "2023-08-14 20:53:44"
}

```

2.  **Listar todos os usuários**

-   **URL:**  `/usuarios`
    
-   **Método:**  `GET`
    
-   **Resposta de Sucesso:**
    

```json
[
   {
"id" : 1,
"nome" : "Marcia",
"email" : "joao@example.com",
"createdAt" : "2023-08-14 20:53:44",
"updatedAt" : "2023-08-14 20:53:44"

},

{

"id" : 2,
"nome" : "Matheus Sabino",
"email" : "matheus@example.com",
"createdAt" : "2023-08-14 20:54:53",
"updatedAt" : "2023-08-14 20:54:53"

},

{

"id" : 3,
"nome" : "isabela Pizatti",
"email" : "pizzeti@example.com",
"createdAt" : "2023-08-14 20:55:15",
"updatedAt" : "2023-08-14 20:55:15"

},

{

"id" : 8,
"nome" : "Francisco Souza",
"email" : "antonia@example.com",
"createdAt" : "2023-08-14 21:22:44",
"updatedAt" : "2023-08-14 21:22:44"

},

{

"id" : 9,
"nome" : "Francisco Souza",
"email" : "antonia@example.com",
"createdAt" : "2023-08-14 21:24:21",
"updatedAt" : "2023-08-14 21:24:21"

}
    ...
]

```

3.  **Obter um usuário pelo ID**

-   **URL:**  `/Usuários/5`
    
-   **Método:**  `GET`
    
-   **Resposta de Sucesso:**
    

```json
{
    "id": 5,
	"nome": "Francisco Souza",
	"email": "antonia@example.com",
	"createdAt": "2023-08-14T21:00:28.000Z",
	"updatedAt" "2023-08-14T21:00:28.000Z"v
}

```

#### **Posts**

1.  **Criar um post**

-   **URL:**  `/posts`
-   **Método:**  `POST`
-   **Body:**

```json
{
    "titulo": "Teste 3",
	"conteudo": "não aguento mais erros no programa ",
	"autor_id": 3
}

```

-   **Resposta de Sucesso:**

```json
{
    "id": 1,
	"titulo": "Teste 1",
	"conteudo": "só gzuis na causa",
	"autor_id": 1,
	"createdAt": "2023-08-14T21:06:23.000Z",
	"updatedAt": "2023-08-14T21:06:23.000Z"
}

```

2.  **Listar todos os posts**

-   **URL:**  `/posts`
    
-   **Método:**  `GET`
    
-   **Resposta de Sucesso:**
    

```json
[
    {

"id": 1,
"titulo": "Teste 1",
"conteudo": "só gzuis na causa",
"autor_id": 1,
"createdAt": "2023-08-14T21:06:23.000Z",
"updatedAt": "2023-08-14T21:06:23.000Z"

}

{

"id": 2,
"titulo": "Teste 2",
"conteudo": "eu sempre esqueço dos ponto e virgulas ",
"autor_id": 2,
"createdAt": "2023-08-14T21:07:57.000Z",
"updatedAt": "2023-08-14T21:07:57.000Z"

}

  
  

{

"id": 3,
"titulo": "Teste 3",
"conteudo": "não aguento mais erros no programa ",
"autor_id": 3,
"createdAt": "2023-08-14T21:09:20.000Z",
"updatedAt": "2023-08-14T21:09:20.000Z"

}
    ...
]

```

3.  **Obter um post pelo ID**

-   **URL:**  `/posts/:id`
    
-   **Método:**  `GET`
    
-   **Resposta de Sucesso:**
    

```json
{
    "id": 1,
	"titulo": "Teste 1",
	"conteudo": "só gzuis na causa",
	"autor_id": 1,
	"createdAt": "2023-08-14T21:06:23.000Z",
	"updatedAt": "2023-08-14T21:06:23.000Z"
}

```

3.  **Obter um post pelo ID**

-   **URL:**  http://localhost:8081/Usuarios/1
    
-   **Método:**  put
    
-   **Resposta de Sucesso:**
    
```json
{
    "nome": "Marcia"
}
```

3.  **Obter um post pelo ID**

-   **URL:**  `http://localhost:8081/Usuarios/9
    
-   **Método:**  `delete`
    
-   **Resposta de Sucesso:**
    

```json
{
    "sucess": true,
	"message": "Usuario deletado com sucesso"
}

```