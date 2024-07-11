

export class ListEnvironmentPermissionsRequest {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public constructor(applicationId?: string, environmentId?: string) { 
        this['application_id'] = applicationId;
        this['environment_id'] = environmentId;
    }
    public withApplicationId(applicationId: string): ListEnvironmentPermissionsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ListEnvironmentPermissionsRequest {
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