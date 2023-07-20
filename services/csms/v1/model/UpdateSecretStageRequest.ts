import { UpdateSecretStageRequestBody } from './UpdateSecretStageRequestBody';


export class UpdateSecretStageRequest {
    private 'secret_name'?: string;
    private 'stage_name'?: string;
    public body?: UpdateSecretStageRequestBody;
    public constructor(secretName?: string, stageName?: string) { 
        this['secret_name'] = secretName;
        this['stage_name'] = stageName;
    }
    public withSecretName(secretName: string): UpdateSecretStageRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withStageName(stageName: string): UpdateSecretStageRequest {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string  | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName(): string | undefined {
        return this['stage_name'];
    }
    public withBody(body: UpdateSecretStageRequestBody): UpdateSecretStageRequest {
        this['body'] = body;
        return this;
    }
}