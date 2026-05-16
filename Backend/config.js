import dotenv from "dotenv";

dotenv.config()

export const config = {
    db:{
        URI: process.env.DB_URL
    },
    JWT: {
        secret: process.env.JWT_secret_key,
    },
    email:{
        user_email: process.env.USER_EMAIL,
        user_password: process.env.USER_PASSWORD
    }
};