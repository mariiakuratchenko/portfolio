let Projects = require('../models/projects');

module.exports.create = async function (req, res, next) {
  try {
    let project = req.body;

    let result = await Projects.create(project);
    console.log("Result: " + result);

    res.status(200);
    res.json(
      {
        success: true,
        message: "Project created successfully.",
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
    let list = await Projects.find();

    res.json(list);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.getProjectById = async function (req, res, next) {
  try {
    let project = await Projects.findOne({ _id: req.params.Id });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json(project);

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.put = async function (req, res, next) {
  try {
    let result = await Projects.updateOne({ _id: req.params.Id }, req.body);
    console.log("Result: " + result);

    if (result.modifiedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Project updated successfully."
        }
      );
    } else {
      throw new Error('Project not updated. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}


module.exports.deleteOneProject = async function (req, res, next) {
  try {
    let result = await Projects.deleteOne({ _id: req.params.Id });
    console.log("Result: " + result);

    if (result.deletedCount > 0) {
      res.status(200);
      res.json(
        {
          success: true,
          message: "Project deleted successfully."
        }
      );
    } else {
      throw new Error('Project not deleted. Are you sure it exists?')
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports.deleteAll = async function (req, res, next) {
    try {
      let list = await Projects.deleteMany();
  
        res.json({
            success: true,
            message: 'All projects deleted successfully'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}