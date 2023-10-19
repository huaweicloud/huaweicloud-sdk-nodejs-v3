import { EnvVariableBase } from './EnvVariableBase';


export class UpdateEnvironmentVariableV2Request {
    private 'instance_id'?: string;
    private 'env_variable_id'?: string;
    public body?: EnvVariableBase;
    public constructor(instanceId?: string, envVariableId?: string) { 
        this['instance_id'] = instanceId;
        this['env_variable_id'] = envVariableId;
    }
    public withInstanceId(instanceId: string): UpdateEnvironmentVariableV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnvVariableId(envVariableId: string): UpdateEnvironmentVariableV2Request {
        this['env_variable_id'] = envVariableId;
        return this;
    }
    public set envVariableId(envVariableId: string  | undefined) {
        this['env_variable_id'] = envVariableId;
    }
    public get envVariableId(): string | undefined {
        return this['env_variable_id'];
    }
    public withBody(body: EnvVariableBase): UpdateEnvironmentVariableV2Request {
        this['body'] = body;
        return this;
    }
}