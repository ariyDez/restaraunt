const FoodCategorySchema = require('../schemas/FoodCategory.schema');

class FoodCategoryModel {
    constructor() {}

    static async getAll() {
        return await FoodCategorySchema.find();
    }

    static async get(id){
        return await FoodCategorySchema.findOne({ _id: id });
    }

    static async create(foodCategoryParams) {
        const foodCategory = new FoodCategorySchema(foodCategoryParams);
        return foodCategory.save();
    }

    static async edit(id) {}

    static async delete(id) {}
}

module.exports = FoodCategoryModel;