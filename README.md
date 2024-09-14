
# API Documentation

## Base URL
`http://localhost:PORT/api`

`https://ecommerce-backend-dvl9.onrender.com/`

## Endpoints

### Auth Routes (`/api/auth`)

#### POST `/register`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Validation**: `registrationSchema`
- **Response**: User details and access token.

#### POST `/login`
- **Description**: Authenticates a user and returns an access token.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Validation**: `loginSchema`
- **Response**: Access token and refresh token.

#### POST `/refresh-access-token`
- **Description**: Refreshes the access token using a refresh token.
- **Request Body**:
  ```json
  {
    "refreshToken": "string"
  }
  ```
- **Validation**: `refreshTokenSchema`
- **Response**: New access token.

### Product Routes (`/api/products`)

#### GET `/`
- **Description**: Searches for products.
- **Response**: List of products.

#### GET `/:id`
- **Description**: Retrieves a product by ID.
- **Response**: Product details.

### Seller Routes (`/api/seller`)

#### GET `/products`
- **Description**: Retrieves products for the seller.
- **Authentication**: Required (role: seller)
- **Response**: List of products.

#### POST `/products`
- **Description**: Adds a new product.
- **Request Body**:
  ```json
  {
    "name": "string",
    "category": "string",
    "description": "string",
    "price": "number",
    "discount": "number",
    "isAvailable": "boolean"
  }
  ```
- **Validation**: `productSchema`
- **Authentication**: Required (role: seller)
- **Response**: Added product details.

#### PUT `/products/:productId`
- **Description**: Updates an existing product.
- **Request Body**: Same as POST `/products`.
- **Authentication**: Required (role: seller)
- **Response**: Updated product details.

#### DELETE `/products/:productId`
- **Description**: Deletes a product.
- **Authentication**: Required (role: seller)
- **Response**: Confirmation of deletion.

### Category Routes (`/api/categories`)

#### GET `/`
- **Description**: Retrieves all categories.
- **Response**: List of categories.

#### POST `/`
- **Description**: Adds a new category.
- **Request Body**:
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Validation**: `categorySchema`
- **Authentication**: Required (admin)
- **Response**: Added category details.

#### PUT `/:categoryId`
- **Description**: Updates an existing category.
- **Request Body**: Same as POST `/`.
- **Authentication**: Required (admin)
- **Response**: Updated category details.

#### DELETE `/:categoryId`
- **Description**: Deletes a category.
- **Authentication**: Required (admin)
- **Response**: Confirmation of deletion.

### Error Handling

- **Common Errors**:
  - `401 Unauthorized`: Token required or invalid.
  - `403 Forbidden`: Access denied.
  - `404 Not Found`: Resource not found.
  - `500 Internal Server Error`: Server error.
 