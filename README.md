# ascent

This project shows the last 20 asteroid that are dangrous that are potentially dangerous to us using [NASA API](https://api.nasa.gov/api.html#NeoWS) given a distance X (km) and a diameter Y (km) as paramters. A dangerous asteroid is defined as an object whose distance from Earth is less than X meters and whose diameter is bigger or equal than Y meters.

## Installation

## Running the server locally

1. Start up the server - Run `npm start` | `npm run dev`

2. Server should be running on http://localhost:2020/ by default

## Routes

| Routes                                              | Description                            |
| --------------------------------------------------- | -------------------------------------- |
| handler                                             |                                        |
| [POST] &nbsp; /api/asteroid/get-dangerous?x=20&y=30 | Get list of 20 last dangerous asteroid |
| [GET] &nbsp; /api/asteroid/get-all                  | Get all all asteroid                   |
