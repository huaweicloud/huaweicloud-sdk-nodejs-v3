

export class ShowApplicationConfigurationRequest {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withApplicationId(applicationId: string): ShowApplicationConfigurationRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ShowApplicationConfigurationRequest {
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