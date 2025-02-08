import { Request, Response } from "express";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

export const token = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { grant_type, code, client_id, redirect_uri } = req.body;

        if (client_id !== "upfirst" || redirect_uri !== "http://localhost:8081/process") {
            return res.status(400).json({ error: "invalid_client_id" });
        }

        // Validate grant_type
        if (grant_type !== "authorization_code") {
            return res.status(400).json({ error: "unsupported_grant_type" });
        }

        if (!code) {
            return res.status(400).json({ error: "invalid_code" });
        }

        const accessToken = await generateAccessToken();
        const refreshToken = await generateRefreshToken();

        return res.json({
            access_token: accessToken,
            token_type: "bearer",
            expires_in: 3600, // 1 hour
            refresh_token: refreshToken,
        });
    } catch (error) {
        console.error("Error generating tokens:", error);
        return res.status(500).json({ error: "internal_server_error" });
    }
};
