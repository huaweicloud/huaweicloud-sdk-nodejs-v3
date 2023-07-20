

export class ShowSecretRequest {
    private 'secret_name'?: string;
    public constructor(secretName?: string) { 
        this['secret_name'] = secretName;
    }
    public withSecretName(secretName: string): ShowSecretRequest {
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