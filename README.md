

# API Documentation

## Base URL's
```
http://localhost:3000/api
```
#### Hosted api URL
```
https://ecommerce-backend-dvl9.onrender.com/
```
## Postman DOCS
#### authentication
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/12805741-0e8bce4c-9adc-4810-99e6-480b5589f372?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D12805741-0e8bce4c-9adc-4810-99e6-480b5589f372%26entityType%3Dcollection%26workspaceId%3Df4bc0ffe-f822-49ea-bdcf-ca8ec8def3cf)


#### buyer
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/12805741-86e896f6-f133-40f4-a2a9-a90e70c67ef4?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D12805741-86e896f6-f133-40f4-a2a9-a90e70c67ef4%26entityType%3Dcollection%26workspaceId%3Df4bc0ffe-f822-49ea-bdcf-ca8ec8def3cf)


#### seller
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/12805741-4dc2fa7b-55e7-4e71-a9c6-13aa6716f0b4?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D12805741-4dc2fa7b-55e7-4e71-a9c6-13aa6716f0b4%26entityType%3Dcollection%26workspaceId%3Df4bc0ffe-f822-49ea-bdcf-ca8ec8def3cf)

#### categories
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/12805741-9ea2f71a-9463-4a55-b878-e87af62ddb5b?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D12805741-9ea2f71a-9463-4a55-b878-e87af62ddb5b%26entityType%3Dcollection%26workspaceId%3Df4bc0ffe-f822-49ea-bdcf-ca8ec8def3cf)


## Authentication Routes
### Register
- **Endpoint:** `/api/auth/register`
- **Method:** POST
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "role": "string"
  }
  ```
- **Validation Schema:**
  ```js
  {
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid("seller", "buyer").required()
  }
  ```

### Login
- **Endpoint:** `/api/auth/login`
- **Method:** POST
- **Description:** Log in a user and get an access token.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Validation Schema:**
  ```js
  {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  }
  ```

### Refresh Access Token
- **Endpoint:** `/api/auth/refresh-access-token`
- **Method:** POST
- **Description:** Refresh access token using a refresh token.
- **Request Body:**
  ```json
  {
    "refreshToken": "string"
  }
  ```
- **Validation Schema:**
  ```js
  {
    refreshToken: Joi.string().required()
  }
  ```

## Product Routes
### Search Products
- **Endpoint:** `/api/products`
- **Method:** GET
- **Description:** Search for products.
- **Query Parameters:** (Optional)
  - `search`: string - Search term for filtering products.

### Get Product by ID
- **Endpoint:** `/api/products/:id`
- **Method:** GET
- **Description:** Get product details by ID.
- **Path Parameters:**
  - `id`: number - Product ID.

## Buyer Routes
### Search Products
- **Endpoint:** `/api/buyer/search`
- **Method:** GET
- **Description:** Search for products.
- **Query Parameters:** (Optional)
  - `search`: string - Search term for filtering products.

### Get Cart Items
- **Endpoint:** `/api/buyer/cart`
- **Method:** GET
- **Description:** Get all items in the user's cart.

### Add to Cart
- **Endpoint:** `/api/buyer/cart`
- **Method:** POST
- **Description:** Add a product to the cart.
- **Request Body:**
  ```json
  {
    "productId": "number",
    "quantity": "number"
  }
  ```

### Reduce Product Quantity from Cart
- **Endpoint:** `/api/buyer/cart/reduce-quantity`
- **Method:** PATCH
- **Description:** Reduce the quantity of a product in the cart.
- **Request Body:**
  ```json
  {
    "productId": "number",
    "quantity": "number"
  }
  ```

### Remove from Cart
- **Endpoint:** `/api/buyer/cart/:productId`
- **Method:** DELETE
- **Description:** Remove a product from the cart.
- **Path Parameters:**
  - `productId`: number - Product ID.

## Seller Routes
### Get Seller Products
- **Endpoint:** `/api/seller/products`
- **Method:** GET
- **Description:** Get all products listed by the seller.

### Add Product
- **Endpoint:** `/api/seller/products`
- **Method:** POST
- **Description:** Add a new product.
- **Request Body:**
  ```json
  {
    "name": "string",
    "category": "number",
    "description": "string",
    "price": "number",
    "discount": "number",
    "isAvailable": "boolean"
  }
  ```

### Update Product
- **Endpoint:** `/api/seller/products/:productId`
- **Method:** PUT
- **Description:** Update product details.
- **Path Parameters:**
  - `productId`: number - Product ID.
- **Request Body:**
  ```json
  {
    "name": "string",
    "category": "number",
    "description": "string",
    "price": "number",
    "discount": "number",
    "isAvailable": "boolean"
  }
  ```

### Delete Product
- **Endpoint:** `/api/seller/products/:productId`
- **Method:** DELETE
- **Description:** Delete a product.
- **Path Parameters:**
  - `productId`: number - Product ID.

## Category Routes
### Get Categories
- **Endpoint:** `/api/categories`
- **Method:** GET
- **Description:** Get all categories.

### Add Category
- **Endpoint:** `/api/categories`
- **Method:** POST
- **Description:** Add a new category.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```

### Update Category
- **Endpoint:** `/api/categories/:categoryId`
- **Method:** PUT
- **Description:** Update category details.
- **Path Parameters:**
  - `categoryId`: number - Category ID.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```

### Delete Category
- **Endpoint:** `/api/categories/:categoryId`
- **Method:** DELETE
- **Description:** Delete a category.
- **Path Parameters:**
  - `categoryId`: number - Category ID.
