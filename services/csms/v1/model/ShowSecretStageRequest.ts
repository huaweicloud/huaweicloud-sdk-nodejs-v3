

export class ShowSecretStageRequest {
    private 'secret_name'?: string;
    private 'stage_name'?: string;
    public constructor(secretName?: string, stageName?: string) { 
        this['secret_name'] = secretName;
        this['stage_name'] = stageName;
    }
    public withSecretName(secretName: string): ShowSecretStageRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withStageName(stageName: string): ShowSecretStageRequest {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string  | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName(): string | undefined {
        return this['stage_name'];
    }
}