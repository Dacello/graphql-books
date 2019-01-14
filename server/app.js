const { ApolloServer } = require('apollo-server');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

// allow cross-origin requests
// app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://localhost:27017/books_demo')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
// // bind express with graphql
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));

// app.listen(4000, () => {
//     console.log('now listening for requests on port 4000');
// });
