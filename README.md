# Hero-App
# Full Stack Web Development Exercise: My Favorite Heroes

## Overview
Build a full-stack web application where users can manage their favorite heroes. Users must authenticate to access the system, after which they can add, rate, filter, and delete heroes.

## Technical Requirements

### Stack
- Frontend: React
- Backend: Express.js
- Database: MongoDB
- Authentication: bcrypt for password hashing, and  cookies
- Use middleware for user authentication

### Features

#### Core Requirements
1. Authentication System
   - User registration with hashed passwords
   - Login with session cookies
   - Automatic login on page refresh using cookies

2. Hero Management
   - Add new heroes (name, imageUrl)
   - View personal hero collection
   - Delete heroes from collection
   - Rate heroes (1-5 stars)
   - Filter heroes by minimum rating

#### Bonus Feature
- Search heroes by name

### API Endpoints

```
Authentication:
POST /api/auth/register
POST /api/auth/login
GET /api/auth/validate

Heroes:
POST /api/heroes
GET /api/heroes
DELETE /api/heroes/:id
PUT /api/heroes/:id/rate
GET /api/heroes/filter/:rating
GET /api/heroes/search/:name (bonus)
```

## Implementation Steps

### Step 1: Architecture Design
1. Draw system architecture diagram
2. Design component hierarchy
3. Plan database relationships
4. Document API endpoints

### Step 2: Core Implementation
1. Set up project structure
2. Implement authentication system
3. Create hero management features
4. Add rating and filtering functionality
5. Implement delete functionality

### Step 3: Bonus Feature
1. Implement search functionality

## Success Criteria
- Users can register and login
- Sessions persist across page reloads
- Users can add, rate, and delete heroes
- Heroes are associated with their creators
- Users can filter heroes by rating
- Database correctly stores all information
- API endpoints follow RESTful conventions
- Clean and responsive UI

## Evaluation
- Working authentication: 20%
- Hero management (CRUD): 30%
- Rating system: 15%
- Filter functionality: 15%
- Code quality: 10%
- UI/UX: 10%
- Bonus features: +10%

## Submission Requirements
1. GitHub repository with:
   - Clear README
   - Installation instructions
   - API documentation
2. Working demo
3. Architecture diagram