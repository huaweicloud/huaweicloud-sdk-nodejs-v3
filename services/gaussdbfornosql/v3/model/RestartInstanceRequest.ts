import { RestartInstanceRequestBody } from './RestartInstanceRequestBody';


export class RestartInstanceRequest {
    private 'instance_id'?: string;
    public body?: RestartInstanceRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RestartInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RestartInstanceRequestBody): RestartInstanceRequest {
        this['body'] = body;
        return this;
    }
}