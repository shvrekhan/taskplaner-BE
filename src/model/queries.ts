const authQuery = {
  checkEmailInLoginTable: "SELECT * FROM users WHERE username = $1 or email = $2",
  saveCredOnSignUp: "INSERT INTO users (user_id,first_name,last_name,email,username,password,created_at,last_login) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
  saveToken: "INSERT INTO login (user_id,jwt,last_login) VALUES ($1,$2,$3)"
};

const CRUDQueries = {

}
module.exports = { authQuery, CRUDQueries }
