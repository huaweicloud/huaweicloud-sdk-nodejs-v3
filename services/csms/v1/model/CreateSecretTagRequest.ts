import { CreateSecretTagRequestBody } from './CreateSecretTagRequestBody';


export class CreateSecretTagRequest {
    private 'secret_id'?: string;
    public body?: CreateSecretTagRequestBody;
    public constructor(secretId?: string) { 
        this['secret_id'] = secretId;
    }
    public withSecretId(secretId: string): CreateSecretTagRequest {
        this['secret_id'] = secretId;
        return this;
    }
    public set secretId(secretId: string  | undefined) {
        this['secret_id'] = secretId;
    }
    public get secretId(): string | undefined {
        return this['secret_id'];
    }
    public withBody(body: CreateSecretTagRequestBody): CreateSecretTagRequest {
        this['body'] = body;
        return this;
    }
}