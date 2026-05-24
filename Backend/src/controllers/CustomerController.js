import CustomerModel from '../models/CustomerModel.js';

const CustomerController = {}

CustomerController.getAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    return res.status(200).json(customers);
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


CustomerController.getAllCustomerById = async (req, res) => {
    try {
        const customer = await CustomerModel.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        return res.status(200).json(customer);
    } catch (error) {
        console.log("error " + error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

CustomerController.updateCustomer = async (req, res) => {
    try {

        let {
            name,
            lastName,
            email,
            password,
            phoneNumber,    
            dui,
            companie,
            status,
            frequency,
            is_verified, 
            loginAttempts,
            timeOut,
            imagen_URL
        } = req.body;

        name = name?.trim();
        password = password?.trim();
        
        if (!name || !email || !password) {
      return res.status(400).json({ message: "Fields required" });
    }

    if (birthdate > new Date() || birthdate < new Date("1901-01-01")) {
      return res.status(400).json({ message: "Invalid Date" });
    }

    const customerUpdated = await CustomerModel.findByIdAddUpdate(
        req.params.id,
        {
            name,
            lastName,
            email,
            password,
            phoneNumber,    
            dui,
            companie,
            status,
            frequency,
            is_verified,
            loginAttempts,
            timeOut,
            imagen_URL
        },
        { new: true }
    );

    if (!customerUpdated) {
      return res.status(404).json({ message: "Customer not found" });
    }

    return res.status(200).json({message: "Customer updated successfully"});

    }catch(error){
        console.log("error " + error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

CustomerController.deleteCustomer = async (req, res) => {
  try {
    const deleteCustomer = CustomerModel.findByIdAndDelete(req.params.id);

    // Si no se elimina es por que no encontró el id
    if (!deleteCustomer) {
      return res.status(404).json({ message: "Customer Not Found" });
    }

    return res.status(200).json({ message: "Customer Deleted" });
  } catch (error) {
    console.log("error " + error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default CustomerController;


