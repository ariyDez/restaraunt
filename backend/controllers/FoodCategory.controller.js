const FoodCategoryModel = require('../models/FoodCategory.model');

class FoodCategoryController {
    getAll(req, res) {
        async function main() {
            const foodCategories = await FoodCategoryModel.getAll();
            return res.status(200).json({ status: 'ok', data: foodCategories });
        }

        return main()
            .catch(err => res.status(500).json({ status: 'error', data: err }));
    }

    get(req, res) {
        const id = req.params.id;
        async function main() {
            const foodCategory = await FoodCategoryModel.get(id);
            return res.status(200).json({ status: 'ok', data: foodCategory });
        }

        return main()
            .catch(err => res.status(500).json({ status: 'error', data: err }));
    }

    save(req, res) {
        const data = req.body;
        async function main() {
            const foodCategory = await FoodCategoryModel.create(data);
            return res.status(200).json({ status: 'ok', data: foodCategory });
        }

        return main()
            .catch(err => res.status(500).json({ status: 'error', data: err }));
    }
}

module.exports = new FoodCategoryController();