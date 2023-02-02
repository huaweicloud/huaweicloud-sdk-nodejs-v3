import { UpdateSecretStageRequestBody } from './UpdateSecretStageRequestBody';


export class UpdateSecretStageRequest {
    private 'secret_name': string | undefined;
    private 'stage_name': string | undefined;
    public body?: UpdateSecretStageRequestBody;
    public constructor(secretName?: any, stageName?: any) { 
        this['secret_name'] = secretName;
        this['stage_name'] = stageName;
    }
    public withSecretName(secretName: string): UpdateSecretStageRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
    public withStageName(stageName: string): UpdateSecretStageRequest {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName() {
        return this['stage_name'];
    }
    public withBody(body: UpdateSecretStageRequestBody): UpdateSecretStageRequest {
        this['body'] = body;
        return this;
    }
}