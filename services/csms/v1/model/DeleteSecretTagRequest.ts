

export class DeleteSecretTagRequest {
    private 'secret_id'?: string;
    public key?: string;
    public constructor(secretId?: string, key?: string) { 
        this['secret_id'] = secretId;
        this['key'] = key;
    }
    public withSecretId(secretId: string): DeleteSecretTagRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
    public withKey(key: string): DeleteSecretTagRequest {
        this['key'] = key;
        return this;
    }
}