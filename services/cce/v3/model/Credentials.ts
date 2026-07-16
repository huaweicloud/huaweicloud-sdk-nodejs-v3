

export class Credentials {
    public accessKeyId?: string;
    public secretAccessKey?: string;
    public securityToken?: string;
    public expiration?: string;
    public constructor() { 
    }
    public withAccessKeyId(accessKeyId: string): Credentials {
        this['accessKeyId'] = accessKeyId;
        return this;
    }
    public withSecretAccessKey(secretAccessKey: string): Credentials {
        this['secretAccessKey'] = secretAccessKey;
        return this;
    }
    public withSecurityToken(securityToken: string): Credentials {
        this['securityToken'] = securityToken;
        return this;
    }
    public withExpiration(expiration: string): Credentials {
        this['expiration'] = expiration;
        return this;
    }
}