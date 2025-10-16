let Services = require('../models/services');

module.exports.create = async function (req, res, next) {
  try {
    let service = req.body;

    let result = await Services.create(service);
    console.log("Result: " + result);

    res.status(200);
    res.json(
      {
        success: true,
        message: "Service created successfully.",
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
    let list = await Services.find();

    res.json(list);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.getServiceById = async function (req, res, next) {
  try {
    let service = await Services.findOne({ _id: req.params.Id });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json(service);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.put = async function (req, res, next) {
  try {
    let result = await Services.updateOne({ _id: req.params.Id }, req.body);
    console.log("Result: " + result);

    if (result.modifiedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Service updated successfully."
        }
      );
    } else {
      throw new Error('Service not updated. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports.deleteOneService = async function (req, res, next) {
  try {
    let result = await Services.deleteOne({ _id: req.params.Id });
    console.log("Result: " + result);

    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Service deleted successfully."
        }
      );
    } else {
      throw new Error('Service not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.deleteAll = async function (req, res, next) {
    try {
      let list = await Services.deleteMany();
  
        res.json({
            success: true,
            message: 'All services deleted successfully'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}