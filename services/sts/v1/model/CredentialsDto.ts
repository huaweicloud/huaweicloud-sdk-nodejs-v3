

export class CredentialsDto {
    private 'access_key_id'?: string;
    public expiration?: Date;
    private 'secret_access_key'?: string;
    private 'security_token'?: string;
    public constructor(accessKeyId?: string, expiration?: Date, secretAccessKey?: string, securityToken?: string) { 
        this['access_key_id'] = accessKeyId;
        this['expiration'] = expiration;
        this['secret_access_key'] = secretAccessKey;
        this['security_token'] = securityToken;
    }
    public withAccessKeyId(accessKeyId: string): CredentialsDto {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withExpiration(expiration: Date): CredentialsDto {
        this['expiration'] = expiration;
        return this;
    }
    public withSecretAccessKey(secretAccessKey: string): CredentialsDto {
        this['secret_access_key'] = secretAccessKey;
        return this;
    }
    public set secretAccessKey(secretAccessKey: string  | undefined) {
        this['secret_access_key'] = secretAccessKey;
    }
    public get secretAccessKey(): string | undefined {
        return this['secret_access_key'];
    }
    public withSecurityToken(securityToken: string): CredentialsDto {
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