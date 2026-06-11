// routes/health.route.js

import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/health", async (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected";

  const isHealthy = dbStatus === "connected";

  res.status(isHealthy ? 200 : 503).json({
    success: isHealthy,
    status: isHealthy ? "healthy" : "unhealthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    services: {
      api: "connected",
      database: dbStatus,
    },
  });
});

export default router;