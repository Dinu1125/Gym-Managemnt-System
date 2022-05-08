const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const StaffModel = require("./models/staffmember");
require('dotenv').config()

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://UserForITPM:dusDA86bZ9HiZz1h@database.ly0ub.mongodb.net/Staff?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});



//Insert Data
app.get("/staffmember", async (req, res) => {
    const member = new StaffModel({
        fullName: "Sri Vira",
        gender: "male",
        birthDay: '1997/10/02',
        roleid: 1,
        address: "No 480/2,Puhulyaya,Mahiyanganaya",
        mobile: 767592100,
        email: "msriv1997@gmail.com",
        image: "urldfd",
    });
    try {
        await member.save();
        res.send("inserted data");
    } catch (error) {
        console.log(error);
    }

});

app.listen(4000, () => console.log(`listening on http://localhost:4000`));

const classScheduleRoutes = require('./controller/classScheduleController')
app.use("/api", classScheduleRoutes);

const nutritionScheduleRoutes = require('./controller/nutritionScheduleController')
app.use("/api", nutritionScheduleRoutes);