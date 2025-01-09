

export class ObsCredential {
    public access?: string;
    public secret?: string;
    private 'security_token'?: string;
    public constructor() { 
    }
    public withAccess(access: string): ObsCredential {
        this['access'] = access;
        return this;
    }
    public withSecret(secret: string): ObsCredential {
        this['secret'] = secret;
        return this;
    }
    public withSecurityToken(securityToken: string): ObsCredential {
        this['security_token'] = securityToken;
        return this;
    }
    public set securityToken(securityToken: string  | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken(): string | undefined {
        return this['security_token'];
    }
}