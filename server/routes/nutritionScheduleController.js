const router = require("express").Router();
const NutritionSchedule = require("../models/nutritionSchedule")

//router for add a class shedule
router.post("/nutritionSchedule", async (req, res) => {

    const name = req.body.name;
    const weight = req.body.weight;
    const gender = req.body.gender;
    const members = req.body.members;

    const newNutritionSchedule = new NutritionSchedule({
        name,
        weight,
        gender,
        members
    })



    try {
        let response = await newNutritionSchedule.save();
        if (response)
            return res.status(201).send({ message: "new Nutrition Schedule Added" });
    } catch (err) {
        console.log("error while saving");
        return res.status(500).send({ status: "Internal Server Error" });
    }
});

//router for retrieve and send all the ClassSchedule records
router.get("/nutritionSchedule", async (req, res) => {

    try {
        const response = await NutritionSchedule.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

//router for update a class shedule
router.put("/nutritionSchedule/:Id", async (req, res) => {
    const _id = req.params.Id;
    const name = req.body.name;
    const weight = req.body.weight;
    const gender = req.body.gender;
    const members = req.body.members;

    const payload = {
        name,
        weight,
        gender,
        members,
    }



    if (_id) {
        try {
            await NutritionSchedule.findOneAndUpdate({ _id: _id }, payload).then(() => {
                return res.status(200).send({ status: "Nutrition Schedule Successfully updated!" });
            })
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: "Internal Server Error" });
        }
    }
});

//router for update a class shedule
router.delete("/nutritionSchedule/:Id", async (req, res) => {
    const _id = req.params.Id;

    if (_id) {
        try {
            await NutritionSchedule.deleteOne({ _id: _id }).then(() => {
                return res.status(200).send({ status: "Nutrition Schedule Successfully deleted!" });
            })
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: "Internal Server Error" });
        }
    }
});

module.exports = router;