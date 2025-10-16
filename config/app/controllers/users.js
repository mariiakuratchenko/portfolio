let Users = require('../models/users');

module.exports.create = async function (req, res, next) {
  try {
    let user = req.body;

    let result = await Users.create(user);
    console.log("Result: " + result);

    res.status(200);
    res.json(
      {
        success: true,
        message: "User created successfully.",
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
    let list = await Users.find();

    res.json(list);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.getUserById = async function (req, res, next) {
  try {
    let user = await Users.findOne({ _id: req.params.Id });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json(user);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.put = async function (req, res, next) {
  try {
    let result = await Users.updateOne({ _id: req.params.Id }, req.body);
    console.log("Result: " + result);

    if (result.modifiedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "User updated successfully."
        }
      );
    } else {
      throw new Error('User not updated. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports.deleteOneUser = async function (req, res, next) {
  try {
    let result = await Users.deleteOne({ _id: req.params.Id });
    console.log("Result: " + result);

    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "User deleted successfully."
        }
      );
    } else {
      throw new Error('User not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.deleteAll = async function (req, res, next) {
    try {
      let list = await Users.deleteMany();
  
        res.json({
            success: true,
            message: 'All users deleted successfully'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}