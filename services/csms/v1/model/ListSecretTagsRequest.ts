

export class ListSecretTagsRequest {
    private 'secret_id': string | undefined;
    public constructor(secretId?: any) { 
        this['secret_id'] = secretId;
    }
    public withSecretId(secretId: string): ListSecretTagsRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId() {
        return this['secret_id'];
    }
}