const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
////////////////////////////////////TO FETCH THE DATA FROM THE BACKEND//////////////////////////////
app.get("/", async function (req, res) {
  res.status(200).json({
    PLAYER: "62",
    TICKRATE: "69",
    PING: "77",
    REGION: "FRANCE",
    PUNKBUSTER: "ON",
    FAIRFIGHT: "ON",
    PASSWORD: "OFF",
    PRESET: "MODERATE",
    MINIMAP: "ON",
    ONLY_SQUAD_LEADER_SPAWN: "OFF",
    VEHICLES: "ON",
    TEAM_BALANCE: "ON",
    MINIMAP_SPOTTING: "ON",
    HUD: "ON",
    threeP_VEHICLE_CAM: "ON",
    REGENERATIVE_HEALTH: "ON",
    KILL_CAM: "ON",
    FRIENDLY_FIRE: "OFF",
    threeD_SPOTTING: "ON",
    ENEMY_NAME_TAGS: "ON",
    TICKETS: 372,
    VEHICLE_SPAWN_DELAY: 30,
    BULLET_DAMAGE: 100,
    KICK_AFTER_TEAM_KILLS: 4,
    PLAYER_HEALTH: 100,
    PLAYER_RESPAWN_TIME: 100,
    KICK_AFTER_IDLE: 300,
    BAN_AFTER_KICKS: 3,
  });
});
//////////////////////////////////LISTENING TO THE PORT////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log("server started");
});
