

export class CreateAppAccessKeyRequestBody {
    private 'key_name'?: string;
    private 'access_key'?: string;
    private 'secret_key'?: string;
    public constructor(keyName?: string) { 
        this['key_name'] = keyName;
    }
    public withKeyName(keyName: string): CreateAppAccessKeyRequestBody {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withAccessKey(accessKey: string): CreateAppAccessKeyRequestBody {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): CreateAppAccessKeyRequestBody {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
}