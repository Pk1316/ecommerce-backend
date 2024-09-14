expressApp.use("/api/auth", authRoutes);
This line sets up a route for handling authentication-related requests (e.g., login, signup). It maps all requests with the /api/auth URL path to authRoutes, which would be a set of route handlers that manage authentication tasks.
No authentication middleware is applied here since this is typically where users authenticate (i.e., login/signup).

expressApp.use("/api/products", authMiddleware, productRoutes);
This line sets up routes for handling product-related operations, like viewing, creating, updating, or deleting products.
authMiddleware is applied, meaning that any request to /api/products must first pass through this middleware, which likely verifies the user's authentication status (e.g., checks for a valid token).
If the user is authenticated, the request is passed on to productRoutes.

expressApp.use("/api/buyer", authMiddleware, buyerRoutes);
This route handles operations related to buyers (such as buyer profiles or actions specific to the buyers).
Like the product route, authMiddleware is applied to ensure only authenticated users can access these routes.
If the request is authenticated, it will be forwarded to buyerRoutes for handling.

expressApp.use("/api/seller", authMiddleware, sellerRoutes);
This route manages actions specific to sellers, like viewing seller-specific information or performing actions like listing products for sale.
authMiddleware ensures that only authenticated sellers can access these routes.

expressApp.use("/api/categories", authMiddleware, categoryRoutes);
This sets up routes for managing product categories (e.g., adding new categories, retrieving category data).
As with the other routes, authMiddleware ensures that only authenticated users can access this functionality.
