const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    image: {type: String, required: true},
    Price: {type: String, required: true},
    Name: {type: String, required: true},
    Description: {type: String, required: true},  
}, { collection: "Menu-data" });

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
