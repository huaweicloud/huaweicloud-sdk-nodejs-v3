

export class DeleteEnvironmentVariableV2Request {
    private 'instance_id'?: string;
    private 'env_variable_id'?: string;
    public constructor(instanceId?: string, envVariableId?: string) { 
        this['instance_id'] = instanceId;
        this['env_variable_id'] = envVariableId;
    }
    public withInstanceId(instanceId: string): DeleteEnvironmentVariableV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnvVariableId(envVariableId: string): DeleteEnvironmentVariableV2Request {
        this['env_variable_id'] = envVariableId;
        return this;
    }
    public set envVariableId(envVariableId: string  | undefined) {
        this['env_variable_id'] = envVariableId;
    }
    public get envVariableId(): string | undefined {
        return this['env_variable_id'];
    }
}