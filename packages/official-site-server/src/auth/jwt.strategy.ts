import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { config } from "src/utilities/config";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: config.secretKey,
    });
  }

  public async validate(
    req: Request,
    payload: { id: number; iat: Date; exp: Date },
    done: VerifiedCallback
  ) {
    return done(null, payload);
  }
}
