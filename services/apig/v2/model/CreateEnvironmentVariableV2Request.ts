import { EnvVariableCreate } from './EnvVariableCreate';


export class CreateEnvironmentVariableV2Request {
    private 'instance_id'?: string;
    public body?: EnvVariableCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateEnvironmentVariableV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EnvVariableCreate): CreateEnvironmentVariableV2Request {
        this['body'] = body;
        return this;
    }
}