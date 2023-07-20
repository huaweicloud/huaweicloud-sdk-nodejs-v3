import { UpdateSecretRequestBody } from './UpdateSecretRequestBody';


export class UpdateSecretRequest {
    private 'secret_name'?: string;
    public body?: UpdateSecretRequestBody;
    public constructor(secretName?: string) { 
        this['secret_name'] = secretName;
    }
    public withSecretName(secretName: string): UpdateSecretRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withBody(body: UpdateSecretRequestBody): UpdateSecretRequest {
        this['body'] = body;
        return this;
    }
}