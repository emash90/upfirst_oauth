import { Request, Response } from "express";
import { generateAuthCode } from "../utils/jwt";

// Define the expected query parameters
interface AuthRequestQuery {
  response_type?: string;
  client_id?: string;
  redirect_uri?: string;
  state?: string;
}

export const authorize = (req: Request<{}, {}, {}, AuthRequestQuery>, res: Response) => {
    try {
        const { response_type, client_id, redirect_uri, state } = req.query;

        // Validate client_id and redirect_uri
        if (client_id !== "upfirst" || redirect_uri !== "http://localhost:8081/process") {
          return res.status(400).json({ error: "invalid_client" });
        }
      
        // Validate response_type
        if (response_type !== "code") {
          return res.status(400).json({ error: "unsupported_response_type" });
        }
      
        // Generate an authorization code
        const authCode = generateAuthCode();
      
        // Redirect with the code and state (if provided)
        const redirectUrl = `${redirect_uri}?code=${authCode}${state ? `&state=${state}` : ""}`;
        res.redirect(redirectUrl);
    } catch (error) {
        console.error("Error generating tokens:", error);
        return res.status(500).json({ error: "internal_server_error" });
    }
};
