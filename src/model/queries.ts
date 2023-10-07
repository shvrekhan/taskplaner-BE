const query = {
  create: "CREATE TABLE login ( user_id serial PRIMARY KEY, username VARCHAR (50) UNIQUE NOT NULL, password VARCHAR (100) NOT NULL, created_at TIMESTAMP DEFAULT current_timestamp, last_login TIMESTAMP)"
};
export default query;

