
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId

const MemberModel = require("../models/member");

// This section will help you get a list of all the records.
recordRoutes.route("/gymmember/all").get(function (req, res) {
    let db_connect = dbo.getDb("Staff");
    db_connect
      .collection("gymmember")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });

  // This section will help you create a new record.
recordRoutes.route("/gymmember/add").post(function (req, response) {
    let db_connect = dbo.getDb();

    const member = new MemberModel({
        memberid:req.body.memberid,
        fullName:req.body.fullName,
        gender:req.body.gender,
        birthDay:req.body.birthDay,

        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
 
    
        weight:req.body.weight,
        height:req.body.height,
    
        staffmember:req.body.staffmember,
        class:req.body.class,
    });
    
    db_connect.collection("gymmember").insertOne(member, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

  // This section will help you delete a record
  recordRoutes.route("/gymmember/delete/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("gymmember").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });

  // This section will help you get a single record by id
recordRoutes.route("/gymmember/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("gymmember")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });

  // This section will help you update a record by id.
recordRoutes.route("/gymmember/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let member = {
      $set: {
        memberid:req.body.memberid,
        fullName:req.body.fullName,
        gender:req.body.gender,
        birthDay:req.body.birthDay,

        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
 
    
        weight:req.body.weight,
        height:req.body.height,
    
        staffmember:req.body.staffmember,
        class:req.body.class,
      },
    };
    db_connect
      .collection("gymmember")
      .updateOne(myquery, member, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });

module.exports = recordRoutes;
