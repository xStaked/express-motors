# Academlo motors

Simple backend for managing a motorcycle repair company

## Run Locally

Clone the project

```bash
  git clone https://github.com/xStaked/express-motors.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Reference

### Users

#### Get all users

```http
  GET /api/v1/users
```

#### Get user by id

```http
  GET /api/v1/users/${id}
```

#### Create user

```http
  POST /api/v1/users
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `name`     | `string` | **Required**                      |
| `email`    | `string` | **Required**                      |
| `password` | `string` | **Required**                      |
| `role`     | `string` | **Required**. client or employeee |

#### Edit user

```http
  PATCH /api/v1/users/${id}
```

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `id`      | `string` | **Required**. Id of user |
| `name`    | `string` | **Required**             |
| `email`   | `string` | **Required**             |

#### Delete user

```http
  DELETE /api/v1/users/${id}
```

### Repairs

#### Get all repairs

```http
  GET /api/v1/repairs
```

#### Get repair pending by id

```http
  GET /api/v1/repairs/${id}
```

#### Create repair

```http
  POST /api/v1/repairs
```

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `date`    | `Date`   | **Required**. |
| `name`    | `string` | **Required**  |

#### Update

##### **status change to completed**

```http
  PATCH  /api/v1/repairs/${id}
```

#### Delete repair

##### **Update status to cancelled**

```http
  GET /api/v1/users/${id}
```
