

export class DeleteSecretTagRequest {
    private 'secret_id': string | undefined;
    public key: string;
    public constructor(secretId?: any, key?: any) { 
        this['secret_id'] = secretId;
        this['key'] = key;
    }
    public withSecretId(secretId: string): DeleteSecretTagRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId() {
        return this['secret_id'];
    }
    public withKey(key: string): DeleteSecretTagRequest {
        this['key'] = key;
        return this;
    }
}