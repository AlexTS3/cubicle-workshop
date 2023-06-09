const Cube = require('../models/Cube');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();

    // use mongoose to filter in the db
    if (search) {
        result = result.filter(cube => cube.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    };

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    };

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    };

    return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

exports.create = async (cubeData) => {

    const cube = new Cube(cubeData);
    await cube.save();

    // can be returned directly (return cube.save()) instead of using async
    return cube;
};

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId)

exports.attachAccessory = async (cubeId, accessoryId) => {

    // return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } })

    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    return cube.save();
};