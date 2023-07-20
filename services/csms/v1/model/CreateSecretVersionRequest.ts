import { CreateSecretVersionRequestBody } from './CreateSecretVersionRequestBody';


export class CreateSecretVersionRequest {
    private 'secret_name'?: string;
    public body?: CreateSecretVersionRequestBody;
    public constructor(secretName?: string) { 
        this['secret_name'] = secretName;
    }
    public withSecretName(secretName: string): CreateSecretVersionRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withBody(body: CreateSecretVersionRequestBody): CreateSecretVersionRequest {
        this['body'] = body;
        return this;
    }
}