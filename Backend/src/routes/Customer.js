import express from 'express';
import CustomerController from '../controllers/CustomerController.js';

const router = express.Router();

router.route("/")
  .get(CustomerController.getAllCustomers)

router.route("/:id")
  .get(CustomerController.getAllCustomerById)
  .put(CustomerController.updateCustomer)
  .delete(CustomerController.deleteCustomer);

  export default router;