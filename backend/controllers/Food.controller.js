const FoodModel = require('../models/Food.model');

class FoodController {
    getAll(req, res) {
        async function main() {
            const foods = await FoodModel.getAll();
            return res.status(200).json({ status: 'ok', data: foods });
        }

        return main()
            .catch(err => res.status(500).json({ status: 'error', data: err }));
    }

    get(req, res) {
        const id = req.params.id;
        async function main() {
            const food = await FoodModel.get(id);
            return res.status(200).json({ status: 'ok', data: food });
        }

        return main()
            .catch(err => res.status(500).json({ status: 'error', data: err }));
    }

    save(req, res) {
        const data = req.body;
        async function main() {
            const food = await FoodModel.create(data);
            return res.status(200).json({ status: 'ok', data: food });
        }

        return main()
            .catch(err => res.status(500).json({ status: 'error', data: err }));
    }
}

module.exports = new FoodController();