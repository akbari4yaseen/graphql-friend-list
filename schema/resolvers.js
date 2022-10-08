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

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      //   Get last user id
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
