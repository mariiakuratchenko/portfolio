const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completion: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
{collection: "projects"}
);

module.exports = mongoose.model("Projects", ProjectsSchema);