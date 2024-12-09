# QR_Api
Этот API предоставляет функционал регистрации и авторизации для пользователей.

- Регистрация пользователя.
- Авторизация пользователя.
- Хранение данных зарегистрированного пользователя.
### Request (запрос)
##### Конечная точка
**POST** https://grown-cod-happily.ngrok-free.app/users/registration
##### Описание
Эндпоинт для регистрации пользователя.

### Параметры запроса
- **email** (string): Почта.
- **password** (string): Пароль.
- **id** (number): Уникальный индентификатор пользователя.
- **username** (string): Имя пользователя.
- **phone** (string): Номер телефона.
- **admin** (string): Флаг для определения уровня доступа пользователя.

### Пример запроса
```json
{
    "email": "testing@mail.ru",
    "password": "P@ssw0rd",
    "id": "1",
    "username": "Sofia",
    "phone": "+79185466039",
    "admin": "false"
}
```

### Response (ответ)
### Параметры ответа
- **email** (string): Почта.
- **password** (string): Захешированный пароль.
- **id** (number): Уникальный индентификатор пользователя.
- **username** (string): Имя пользователя.
- **phone** (string): Номер телефона.
- **admin** (string): Флаг для определения уровня доступа пользователя.

### Пример ответа

```json
{
   "email": "testing@mail.ru",
   "password": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
   "id": "1",
   "username": "Sofia",
   "phone": "+79185466039",
   "admin": "false"
}
```

### Request (запрос)
##### Конечная точка
**GET** https://grown-cod-happily.ngrok-free.app/get-all
##### Описание
Эндпоинт для получения всех пользователей.

### Параметры запроса
**Пустое тело запроса**

### Response (ответ)
### Параметры ответа
- **id** (number): Уникальный индентификатор пользователя.
- **username** (string): Имя пользователя.
- **password** (string): Захешированный пароль.
- **phone** (string): Номер телефона.
- **email** (string): Почта.
- **admin** (string): Флаг для определения уровня доступа пользователя.

### Пример ответа
```json
[
  {
    "id": 1,
    "username": "Sofia",
    "password": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "phone": "+79185466039",
    "email": "testing@mail.ru",
    "admin": false
  }
  ...
]
```

### Request (запрос)
##### Конечная точка
**GET** https://grown-cod-happily.ngrok-free.app/get-user/:id
##### Описание
##### RequestParam: 
**id** (number): Уникальный индентификатор пользователя. (например, `1`)

### Response (ответ)
### Параметры ответа
- **id** (number): Уникальный индентификатор пользователя.
- **username** (string): Имя пользователя.
- **password** (string): Захешированный пароль.
- **phone** (string): Номер телефона.
- **email** (string): Почта.
- **admin** (string): Флаг для определения уровня доступа пользователя.

### Пример ответа
```json
{
    "id": 1,
    "username": "Sofia",
    "password": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "phone": "+79185466039",
    "email": "testing@mail.ru",
    "admin": false
}
```

### Request (запрос)
##### Конечная точка
**POST** https://grown-cod-happily.ngrok-free.app/login
##### Описание
Эндпоинт для авторизации пользователя в системе.

### Параметры запроса
- **email** (string): Почта.
- **password** (string): Пароль.

### Пример запроса
```json
{
    "email": "testing@mail.ru",
    "password": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}
```

### Response (ответ)
### Параметры ответа
- **email** (string): Почта.
- **password** (string): Захешированный пароль.
- **id** (number): Уникальный индентификатор пользователя.
- **username** (string): Имя пользователя.
- **phone** (string): Номер телефона.
- **admin** (string): Флаг для определения уровня доступа пользователя.

### Пример ответа
```json
{
  "id": 1,
  "username": "Sofia",
  "password": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "phone": "+79185466039",
  "email": "testing@mail.ru",
  "admin": false
}
```
