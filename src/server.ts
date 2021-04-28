import "dotenv/config";
import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(process.env.PORT || 3333, () => console.log("Server is running on port 3333"));