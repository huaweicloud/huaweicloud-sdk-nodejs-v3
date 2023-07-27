import { EnvCreate } from './EnvCreate';


export class CreateEnvironmentV2Request {
    private 'instance_id'?: string;
    public body?: EnvCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateEnvironmentV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EnvCreate): CreateEnvironmentV2Request {
        this['body'] = body;
        return this;
    }
}