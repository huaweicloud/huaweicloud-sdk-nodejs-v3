

export class Secret {
    private 'secret_id'?: string;
    private 'secret_name'?: string;
    public constructor(secretId?: string, secretName?: string) { 
        this['secret_id'] = secretId;
        this['secret_name'] = secretName;
    }
    public withSecretId(secretId: string): Secret {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
    public withSecretName(secretName: string): Secret {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
}