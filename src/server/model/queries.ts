const authQuery = {
  checkEmailInLoginTable: "SELECT * FROM site_users WHERE email_address = $1",
  saveCredOnSignUp: "INSERT INTO site_users (user_id,email_address,user_name,password,created_on,last_login) VALUES ($1,$2,$3,$4,$5,$6)",
  saveToken: "INSERT INTO login (user_id,jwt,last_login) VALUES ($1,$2,$3)"
};

const CRUDQueries = {
  getAllBoards: "SELECT * FROM board WHERE owners_user_id = $1",
  addBoard: "INSERT INTO board (id , owners_user_id,name,created_on) VALUES ($1,$2,$3,$4)",
  removeBoard: "DELETE FROM board WHERE id = $1"
}

module.exports = { authQuery, CRUDQueries }
