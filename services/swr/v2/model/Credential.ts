

export class Credential {
    public type?: string;
    private 'access_key'?: string;
    private 'access_secret'?: string;
    public constructor(type?: string, accessKey?: string, accessSecret?: string) { 
        this['type'] = type;
        this['access_key'] = accessKey;
        this['access_secret'] = accessSecret;
    }
    public withType(type: string): Credential {
        this['type'] = type;
        return this;
    }
    public withAccessKey(accessKey: string): Credential {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withAccessSecret(accessSecret: string): Credential {
        this['access_secret'] = accessSecret;
        return this;
    }
    public set accessSecret(accessSecret: string  | undefined) {
        this['access_secret'] = accessSecret;
    }
    public get accessSecret(): string | undefined {
        return this['access_secret'];
    }
}