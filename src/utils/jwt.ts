import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

//generate auth code

export const generateAuthCode = (): string => {
    return Math.random().toString(36).substring(2, 15)
}

//generate access token

export const generateAccessToken = async() => {
    return await new SignJWT({}).setProtectedHeader({ alg: 'HS256'}).setIssuedAt().setExpirationTime('1h').sign(secret)
}

//generate refresh token

export const generateRefreshToken = async() => {
    return await new SignJWT({}).setProtectedHeader({ alg: 'HS256'}).setIssuedAt().setExpirationTime('1h').sign(secret)
}

