

export class UpdateKeyStoreRequestBody {
    private 'proxy_access_key_id'?: string;
    private 'proxy_secret_access_key'?: string;
    public constructor(proxyAccessKeyId?: string, proxySecretAccessKey?: string) { 
        this['proxy_access_key_id'] = proxyAccessKeyId;
        this['proxy_secret_access_key'] = proxySecretAccessKey;
    }
    public withProxyAccessKeyId(proxyAccessKeyId: string): UpdateKeyStoreRequestBody {
        this['proxy_access_key_id'] = proxyAccessKeyId;
        return this;
    }
    public set proxyAccessKeyId(proxyAccessKeyId: string  | undefined) {
        this['proxy_access_key_id'] = proxyAccessKeyId;
    }
    public get proxyAccessKeyId(): string | undefined {
        return this['proxy_access_key_id'];
    }
    public withProxySecretAccessKey(proxySecretAccessKey: string): UpdateKeyStoreRequestBody {
        this['proxy_secret_access_key'] = proxySecretAccessKey;
        return this;
    }
    public set proxySecretAccessKey(proxySecretAccessKey: string  | undefined) {
        this['proxy_secret_access_key'] = proxySecretAccessKey;
    }
    public get proxySecretAccessKey(): string | undefined {
        return this['proxy_secret_access_key'];
    }
}