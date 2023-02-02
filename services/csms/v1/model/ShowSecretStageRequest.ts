

export class ShowSecretStageRequest {
    private 'secret_name': string | undefined;
    private 'stage_name': string | undefined;
    public constructor(secretName?: any, stageName?: any) { 
        this['secret_name'] = secretName;
        this['stage_name'] = stageName;
    }
    public withSecretName(secretName: string): ShowSecretStageRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
    public withStageName(stageName: string): ShowSecretStageRequest {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName() {
        return this['stage_name'];
    }
}