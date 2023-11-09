

export class ShowEnvironmentDetailRequest {
    private 'environment_id'?: string;
    public constructor(environmentId?: string) { 
        this['environment_id'] = environmentId;
    }
    public withEnvironmentId(environmentId: string): ShowEnvironmentDetailRequest {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
}