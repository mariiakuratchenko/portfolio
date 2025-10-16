let Contacts = require('../models/contacts');

module.exports.create = async function (req, res, next) {
  try {
    let contact = req.body;

    let result = await Contacts.create(contact);
    console.log("Result: " + result);

    res.status(200);
    res.json(
      {
        success: true,
        message: "Contact created successfully.",
        Id: result._id
      }
    );

  } catch (error) {
    console.log(error);
    next(error);
  }

}

module.exports.getAll = async function (req, res, next) {
  try {
    let list = await Contacts.find();

    res.json(list);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.getContactById = async function (req, res, next) {
  try {
    let contact = await Contacts.findOne({ _id: req.params.Id });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json(contact);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.put = async function (req, res, next) {
  try {
    let result = await Contacts.updateOne({ _id: req.params.Id }, req.body);
    console.log("Result: " + result);

    if (result.modifiedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Contact updated successfully."
        }
      );
    } else {
      throw new Error('Contact not updated. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports.deleteOneContact = async function (req, res, next) {
  try {
    let result = await Contacts.deleteOne({ _id: req.params.Id });
    console.log("Result: " + result);

    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Contact deleted successfully."
        }
      );
    } else {
      throw new Error('Contact not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.deleteAll = async function (req, res, next) {
    try {
      let list = await Contacts.deleteMany();
  
        res.json({
            success: true,
            message: 'All contacts deleted successfully'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}