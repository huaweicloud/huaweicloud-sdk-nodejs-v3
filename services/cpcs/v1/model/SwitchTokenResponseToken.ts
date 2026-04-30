import { SwitchTokenResponseTokenApp } from './SwitchTokenResponseTokenApp';
import { SwitchTokenResponseTokenRoles } from './SwitchTokenResponseTokenRoles';
import { SwitchTokenResponseTokenUser } from './SwitchTokenResponseTokenUser';


export class SwitchTokenResponseToken {
    public app?: SwitchTokenResponseTokenApp;
    private 'expires_at'?: string;
    public roles?: Array<SwitchTokenResponseTokenRoles>;
    private 'issued_at'?: string;
    public user?: SwitchTokenResponseTokenUser;
    public constructor() { 
    }
    public withApp(app: SwitchTokenResponseTokenApp): SwitchTokenResponseToken {
        this['app'] = app;
        return this;
    }
    public withExpiresAt(expiresAt: string): SwitchTokenResponseToken {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withRoles(roles: Array<SwitchTokenResponseTokenRoles>): SwitchTokenResponseToken {
        this['roles'] = roles;
        return this;
    }
    public withIssuedAt(issuedAt: string): SwitchTokenResponseToken {
        this['issued_at'] = issuedAt;
        return this;
    }
    public set issuedAt(issuedAt: string  | undefined) {
        this['issued_at'] = issuedAt;
    }
    public get issuedAt(): string | undefined {
        return this['issued_at'];
    }
    public withUser(user: SwitchTokenResponseTokenUser): SwitchTokenResponseToken {
        this['user'] = user;
        return this;
    }
}