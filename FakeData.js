const UserList = [
  {
    id: 1,
    name: "Yaseen",
    username: "akbari01",
    age: 26,
    nationality: "AFGHANISTAN",
    friends: [
      {
        id: 2,
        name: "John",
        username: "jon122",
        age: 30,
        nationality: "CANADA",
      },
      {
        id: 5,
        name: "Pre Kumar",
        username: "kumar",
        age: 42,
        nationality: "INDIA",
      },
    ],
  },
  {
    id: 2,
    name: "John",
    username: "jon122",
    age: 30,
    nationality: "CANADA",
  },
  {
    id: 3,
    name: "Ahmad",
    username: "ahmad",
    age: 26,
    nationality: "IRAN",
  },
  {
    id: 4,
    name: "Gorge",
    username: "gor2020",
    age: 26,
    nationality: "US",
  },
  {
    id: 5,
    name: "Pre Kumar",
    username: "kumar",
    age: 42,
    nationality: "INDIA",
    friends: [
      {
        id: 1,
        name: "Yaseen",
        username: "akbari01",
        age: 26,
        nationality: "AFGHANISTAN",
      },
    ],
  },
];

const MovieList = [
  {
    id: 1,
    name: "Crime and Punished",
    publishedYear: 2020,
    genre: "Action",
  },
  {
    id: 2,
    name: "Peyar",
    publishedYear: 2022,
    genre: "Romance",
  },
  {
    id: 3,
    name: "Purple Hearts",
    publishedYear: 2022,
    genre: "Love",
  },
];

module.exports = { UserList, MovieList };
