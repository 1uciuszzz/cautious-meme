import { createHmac } from "crypto";
import { config } from "./config";

function hashPassword(password: string) {
  const secretKey = config.secretKey;
  return createHmac("sha256", secretKey).update(password).digest("hex");
}

export { hashPassword };
