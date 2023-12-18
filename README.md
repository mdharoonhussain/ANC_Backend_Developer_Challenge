# ANC_Backend_Developer_Challenge

# SWAPI Caching Engine

A caching engine/server for the Star Wars API (SWAPI) that enhances the functionality by adding features like search and sorting.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Database Configuration](#database-configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

The SWAPI Caching Engine is a server that caches data from the Star Wars API (SWAPI) and provides additional features like search and sorting, making it more user-friendly for students working on school projects related to the Star Wars universe.

## Features

- Caching of SWAPI data for improved performance.
- Search functionality for people, films, vehicles, and starships.
- Sorting options for people, films, vehicles, and starships.

## Prerequisites

- Node.js
- MongoDB

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up the environment variables (see [Environment Variables](#environment-variables)).
4. Configure the database (see [Database Configuration](#database-configuration)).
5. Run the application: `npm start`.

## Project Structure

The project is organized as follows:

- `models/`: Contains data models for MongoDB.
- `routes/`: Defines the API routes.
- `db.js`: Establishes the MongoDB connection.
- `index.js`: Main entry point for the application.

## Environment Variables

Create a `.env` file with the following variables:

```env
PORT=4500
MONGO_URL=mongodb://127.0.0.1:27017/swapi
