const router = require("express").Router();
const ClassSchedule = require("../models/classSchedule")

//router for add a class shedule
router.post("/classSchedule", async (req, res) => {

    const className = req.body.className;
    const staffName = req.body.staffName;
    const location = req.body.location;
    const fee = req.body.fee;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;

    const newClassSchedule = new ClassSchedule({
        className,
        staffName,
        location,
        fee,
        startTime,
        endTime,
    })



    try {
        let response = await newClassSchedule.save();
        if (response)
            return res.status(201).send({ message: "new Class Schedule Added" });
    } catch (err) {
        console.log("error while saving");
        return res.status(500).send({ status: "Internal Server Error" });
    }
});

//router for retrieve and send all the ClassSchedule records
router.get("/classSchedule", async (req, res) => {

    try {
        const response = await ClassSchedule.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});

//router for update a class shedule
router.put("/classSchedule/:Id", async (req, res) => {
    const _id = req.params.Id;
    const className = req.body.className;
    const staffName = req.body.staffName;
    const location = req.body.location;
    const fee = req.body.fee;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;

    const payload = {
        className,
        staffName,
        location,
        fee,
        startTime,
        endTime,
    }



    if (_id) {
        try {
            await ClassSchedule.findOneAndUpdate({ _id: _id }, payload).then(() => {
                return res.status(200).send({ status: "Class Schedule Successfully updated!" });
            })
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: "Internal Server Error" });
        }
    }
});

//router for update a class shedule
router.delete("/deleteClassSchedule/:Id", async (req, res) => {
    const _id = req.params.Id;

    if (_id) {
        try {
            await ClassSchedule.deleteOne({ _id: _id }).then(() => {
                return res.status(200).send({ status: "Class Schedule Successfully deleted!" });
            })
        } catch (err) {
            console.log(err);
            return res.status(500).send({ status: "Internal Server Error" });
        }
    }
});

module.exports = router;