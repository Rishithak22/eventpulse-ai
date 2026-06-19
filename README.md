# 🚔 EventPulse AI – Traffic Police Command Center

## Overview

EventPulse AI is a Smart Traffic Police Command Center designed to help traffic police monitor, detect, analyze, and respond to road incidents in real time.

This project was developed as a frontend prototype using **React + Vite + Tailwind CSS** and is designed to be integrated with a backend service that provides live incident, traffic, CCTV, weather, and emergency response data.

---

# Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Leaflet
* Lucide React Icons

---

# Project Structure

```
src
│
├── assets/
│
├── components/
│   ├── dashboard/
│   ├── layout/
│   └── common/
│
├── layouts/
│
├── pages/
│
├── services/        <-- Backend API Integration
│
├── styles/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Current Modules

## Dashboard

Displays complete Traffic Police Command Center overview.

Includes:

* KPI Cards
* Live Traffic Map
* AI Incident Analysis
* Incident Feed
* Traffic Analytics
* Incident Management Table
* Emergency Response
* Notification Panel
* CCTV Panel
* Weather Information
* Patrol Units

---

# Components

## KPI Cards

Shows

* Active Incidents
* Vehicles Monitored
* Average Response Time
* AI Accuracy

---

## Live Map

Displays

* Accident Location
* Police Units
* Ambulance
* CCTV Cameras
* Heavy Traffic Zones

---

## AI Incident Analysis

Displays

* Incident Type
* AI Confidence
* Severity
* Response Status
* Emergency ETA

---

## Incident Feed

Displays latest detected incidents.

---

## Traffic Analytics

Traffic statistics and chart visualization.

---

## Incident Management

Shows

* Incident ID
* Location
* Severity
* Status
* Assigned Officer

Supports:

* View Details
* Dispatch

---

## Emergency Response

Shows

* Ambulance
* Police Patrol
* Traffic Diversion

Supports

* Dispatch Units
* Mark Resolved

---

## Notification Panel

Displays rotating live notifications.

---

## Weather

Current weather information.

---

## Patrol Units

Displays active patrol vehicles.

---

# Current Status

Frontend Prototype

✔ Dashboard Complete

✔ UI Complete

✔ Responsive Layout

✔ Interactive Components

✔ Ready for Backend Integration

---

# Backend Integration

All API calls should be placed inside

```
src/services/
```

Recommended service files

```
dashboardService.js

incidentService.js

trafficService.js

weatherService.js

cctvService.js

emergencyService.js
```

Components should **not** directly call APIs.

Instead

```
Component
      ↓
Service
      ↓
Backend API
```

---

# Expected Backend APIs

Dashboard

GET /api/dashboard

---

Incidents

GET /api/incidents

GET /api/incidents/:id

POST /api/incidents

PUT /api/incidents/:id

---

Traffic

GET /api/traffic

---

Weather

GET /api/weather

---

CCTV

GET /api/cctv

---

Emergency

POST /api/emergency/dispatch

POST /api/emergency/resolve

---

# Backend Integration Guide

Replace hardcoded values with API responses.

Example

Instead of

```
const incidents = [...]
```

Use

```
const incidents = await getIncidents();
```

No UI changes should be required.

Only replace the data source.

---

# Current Frontend Responsibilities

Frontend

* UI
* User Interaction
* Visualization
* Charts
* Maps
* Notifications
* Forms

Backend

* Database
* Authentication
* Live Incident Data
* AI Predictions
* Emergency Dispatch
* Traffic Analytics

---

# Notes for Team

The frontend has been intentionally structured so that backend integration requires minimal UI changes.

Please avoid modifying UI components unless necessary.

Prefer updating the Service Layer inside

```
src/services/
```

rather than editing individual components.

---

# Future Improvements

* Authentication
* Role-based Login
* Live WebSocket Updates
* Real-time Notifications
* Dynamic Charts
* Live GPS Tracking
* AI Prediction APIs
* CCTV Streaming
* Report Generation

---

# Developed For

Smart Traffic Police Command Center

EventPulse AI

Hackathon Prototype
