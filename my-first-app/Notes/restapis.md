# RESTful Services

* client-server architecture
  * client = app/front-end
  * server = backend
* communication
  * occurs via HTTP request
  * expose services that are available via the `HTTP PROTOCOL`
  * client can then directly call these services via `HTTP REQUESTS`
* REST
  * Representational
  * State
  * Transfer
    * convention for building these HTTP services
* Use HTTP protocl principles to
  * Create
  * Read
  * Update
  * Delete
    * data
    *  These are CRUD operations
*  Will expose service at a specific endpoint/ url
*  can expose `resources` such as customers for example
*  HTTP METHODS/VERBS that reveal intention
   *  GET
      *  to get a list of customer(s) / should be plural
      *  if we want a single customer, should include id of that customer in the address
      *  for a single customer, should use the id
   *  POST
      *  working with a collection of costumers
      *  posting a new customer to this collection
      *  SHOULD INCLUDE CUSTOMER OBJECT
   *  PUT
      *  to update a costumer
      *  need id
   *  DELETE
      *  here only need id