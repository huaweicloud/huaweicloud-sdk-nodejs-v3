

export class AgencyCredentials {
    private 'access_key_id'?: string;
    public expiration?: number;
    private 'secret_access_key'?: string;
    private 'session_token'?: string;
    public constructor() { 
    }
    public withAccessKeyId(accessKeyId: string): AgencyCredentials {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withExpiration(expiration: number): AgencyCredentials {
        this['expiration'] = expiration;
        return this;
    }
    public withSecretAccessKey(secretAccessKey: string): AgencyCredentials {
        this['secret_access_key'] = secretAccessKey;
        return this;
    }
    public set secretAccessKey(secretAccessKey: string  | undefined) {
        this['secret_access_key'] = secretAccessKey;
    }
    public get secretAccessKey(): string | undefined {
        return this['secret_access_key'];
    }
    public withSessionToken(sessionToken: string): AgencyCredentials {
        this['session_token'] = sessionToken;
        return this;
    }
    public set sessionToken(sessionToken: string  | undefined) {
        this['session_token'] = sessionToken;
    }
    public get sessionToken(): string | undefined {
        return this['session_token'];
    }
}