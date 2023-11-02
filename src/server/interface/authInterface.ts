export default interface User {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    created_at: Date;
    last_login: Date;
}