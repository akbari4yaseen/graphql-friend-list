const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    //   User resolvers
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      return _.find(UserList, { id: Number(id) });
    },

    // Movie resolvers
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      return _.find(MovieList, { name });
    },
  },

  //   Routing data between User and Movie
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) => movie.publishedYear >= 2000 && movie.publishedYear <= 2022
      );
    },
  },
};

module.exports = { resolvers };
