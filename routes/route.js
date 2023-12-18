const express = require("express");
const axios = require("axios");
const ANCModel = require("../models/model");

const router = express.Router();

const swapiURL = "https://swapi.dev/api/";

// Middleware to cache SWAPI data with search and sorting
router.get("/people", async (req, res) => {
  const { search, sort } = req.query;
  let queryURL = `${swapiURL}people/?`;

  if (search) {
    queryURL += `search=${search}&`;
  }

  if (sort) {
    queryURL += `ordering=${sort}&`;
  }

  try {
    const cachedData = await ANCModel.findOne({ endpoint: "people", search, sort });

    if (cachedData) {
      console.log(`Data found in cache for people`);
      res.json(cachedData.data);
    } else {
      console.log(`Fetching data from SWAPI for people`);
      const {data} = await axios.get(queryURL);
      const newCachedData = new ANCModel({ endpoint: "people", data, search, sort });
      await newCachedData.save();
      res.json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error" });
  }
});

router.get("/people/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const cachedData = await ANCModel.findOne({ endpoint: `people/${id}` });

    if (cachedData) {
      console.log(`Data found in cache for people/${id}`);
      res.json(cachedData.data);
    } else {
      console.log(`Fetching data from SWAPI for people/${id}`);
      const { data } = await axios.get(`${swapiURL}people/${id}/`);
      const newCachedData = new ANCModel({ endpoint: `people/${id}`, data });
      await newCachedData.save();
      res.json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error" });
  }
});

// Films Endpoint
router.get("/films", async (req, res) => {
  const {search, sort} = req.query;
  let queryURL = `${swapiURL}films/?`;

  if (search) {
    queryURL += `search=${search}&`;
  }

  if (sort) {
    queryURL += `ordering=${sort}&`;
  }

  try {
    const cachedData = await ANCModel.findOne({ endpoint: "films", search, sort });

    if (cachedData) {
      console.log(`Data found in cache for films`);
      res.json(cachedData.data);
    } else {
      console.log(`Fetching data from SWAPI for films`);
      const {data} = await axios.get(queryURL);
      const newCachedData = new ANCModel({ endpoint: "films", data, search, sort });
      await newCachedData.save();
      res.json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error" });
  }
});

router.get("/films/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const cachedData = await ANCModel.findOne({ endpoint: `films/${id}` });

    if (cachedData) {
      console.log(`Data found in cache for films/${id}`);
      res.json(cachedData.data);
    } else {
      console.log(`Fetching data from SWAPI for films/${id}`);
      const { data } = await axios.get(`${swapiURL}films/${id}/`);
      const newCachedData = new ANCModel({ endpoint: `films/${id}`, data });
      await newCachedData.save();
      res.json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Internal Server Error" });
  }
});

// Vehicles Endpoint
router.get("/vehicles", async (req, res) => {
    const {search, sort} = req.query;
    let queryURL = `${swapiURL}vehicles/?`;
  
    if (search) {
      queryURL += `search=${search}&`;
    }
  
    if (sort) {
      queryURL += `ordering=${sort}&`;
    }
  
    try {
      const cachedData = await ANCModel.findOne({ endpoint: "vehicles", search, sort });
  
      if (cachedData) {
        console.log(`Data found in cache for vehicles`);
        res.json(cachedData.data);
      } else {
        console.log(`Fetching data from SWAPI for vehicles`);
        const { data } = await axios.get(queryURL);
        const newCachedData = new ANCModel({ endpoint: "vehicles", data, search, sort });
        await newCachedData.save();
        res.json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Internal Server Error" });
    }
  });
  
  router.get("/vehicles/:id", async (req, res) => {
    const {id} = req.params;
  
    try {
      const cachedData = await ANCModel.findOne({ endpoint: `vehicles/${id}` });
  
      if (cachedData) {
        console.log(`Data found in cache for vehicles/${id}`);
        res.json(cachedData.data);
      } else {
        console.log(`Fetching data from SWAPI for vehicles/${id}`);
        const {data} = await axios.get(`${swapiURL}vehicles/${id}/`);
        const newCachedData = new ANCModel({ endpoint: `vehicles/${id}`, data });
        await newCachedData.save();
        res.json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Internal Server Error" });
    }
  });

// Starships Endpoint
router.get("/starships", async (req, res) => {
    const {search, sort} = req.query;
    let queryURL = `${swapiURL}starships/?`;
  
    if (search) {
      queryURL += `search=${search}&`;
    }
  
    if (sort) {
      queryURL += `ordering=${sort}&`;
    }
  
    try {
      const cachedData = await ANCModel.findOne({ endpoint: "starships", search, sort });
  
      if (cachedData) {
        console.log(`Data found in cache for starships`);
        res.json(cachedData.data);
      } else {
        console.log(`Fetching data from SWAPI for starships`);
        const {data} = await axios.get(queryURL);
        const newCachedData = new ANCModel({ endpoint: "starships", data, search, sort });
        await newCachedData.save();
        res.json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Internal Server Error" });
    }
  });
  
  router.get("/starships/:id", async (req, res) => {
    const {id} = req.params;
  
    try {
      const cachedData = await ANCModel.findOne({ endpoint: `starships/${id}` });
  
      if (cachedData) {
        console.log(`Data found in cache for starships/${id}`);
        res.json(cachedData.data);
      } else {
        console.log(`Fetching data from SWAPI for starships/${id}`);
        const { data } = await axios.get(`${swapiURL}starships/${id}/`);
        const newCachedData = new ANCModel({ endpoint: `starships/${id}`, data });
        await newCachedData.save();
        res.json(data);
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;
