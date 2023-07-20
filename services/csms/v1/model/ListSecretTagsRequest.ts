

export class ListSecretTagsRequest {
    private 'secret_id'?: string;
    public constructor(secretId?: string) { 
        this['secret_id'] = secretId;
    }
    public withSecretId(secretId: string): ListSecretTagsRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
}