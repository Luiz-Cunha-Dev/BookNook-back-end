# BookNook 🎥

Api to save your movie list


## Description

This api was created to be a movie organizer, where you can enter the movies you'd like to watch and the movies you've already watched.</br>
You can also add a score for each movie you watched

## Getting Started

### Dependencies

* cors
* dotenv
* express
* joi
* pg


## How to run 

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want (to create the local database use the queries from the movie-diary.sql file)
4. Configure the `.env` file using the `.env.example` file 

5. Run the back-end in a development environment:

```bash
npm run dev
```

## Routes 

Link deploy = https://api-movie-diary.onrender.com
 
</br>

### Insert new movie
```bash
POST: /movies

Body: { 
 "title": "Os Vingadores",
 "platform": "Netflix",
 "genre": "ação"
 }
```
</br>

### Get all movie
```bash
GET: /movies

[
    {
    "id": 1,
    "title": "Os Vingadores",
    "status": false,
    "platform": "Netflix",
    "genre": "ação",
    "score": null
    },
    {
    "id": 1,
    "title": "Tekken",
    "status": true,
    "platform": "Netflix",
    "genre": "luta",
    "score": 3
    },
    {...}
]
```
</br>

### Update movie status 
(change status to true and add score)
```bash
PUT: /movies/:id

Body: { "score": 5}
```

</br>

### Update movie status 
(if the movie has true status change the status to false and delete the score)
```bash
PUT: /movies/:id
```

</br>

### Delete a movie
```bash
DEL: /movies/:id
```
</br>

### Get all genres and movies quantity
```bash
GET: /movies/genres

[
  {
    "id": 2,
    "genreName": "fantasia",
    "count": "3"
  },
  {
    "id": 3,
    "genreName": "ação",
    "count": "4"
  },
  {...}
]
```


## Authors

Contributors names and contact info

ex. Luiz Miguel da Cunha </br>
ex. [@luiz-Cunha-Dev](https://github.com/Luiz-Cunha-Dev)

## Version History

* 1.0
    * Initial Release