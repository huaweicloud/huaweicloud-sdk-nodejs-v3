

export class Credential {
    private 'expires_at': string | undefined;
    public access: string;
    public secret: string;
    public securitytoken: string;
    public constructor(expiresAt?: any, access?: any, secret?: any, securitytoken?: any) { 
        this['expires_at'] = expiresAt;
        this['access'] = access;
        this['secret'] = secret;
        this['securitytoken'] = securitytoken;
    }
    public withExpiresAt(expiresAt: string): Credential {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt() {
        return this['expires_at'];
    }
    public withAccess(access: string): Credential {
        this['access'] = access;
        return this;
    }
    public withSecret(secret: string): Credential {
        this['secret'] = secret;
        return this;
    }
    public withSecuritytoken(securitytoken: string): Credential {
        this['securitytoken'] = securitytoken;
        return this;
    }
}