const authQuery = {
    checkEmailInLoginTable: "SELECT * FROM site_users WHERE email_address = $1",
    saveCredOnSignUp: "INSERT INTO site_users (user_id,email_address,password,created_on,last_login) VALUES ($1,$2,$3,$4,$5)",
    saveToken: "INSERT INTO login (user_id,jwt,last_login) VALUES ($1,$2,$3)"
};
const CRUDQueries = {};
module.exports = { authQuery, CRUDQueries };
//# sourceMappingURL=queries.js.map