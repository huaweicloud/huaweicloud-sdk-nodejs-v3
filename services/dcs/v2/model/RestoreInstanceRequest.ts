import { RestoreInstanceBody } from './RestoreInstanceBody';


export class RestoreInstanceRequest {
    private 'instance_id'?: string;
    public body?: RestoreInstanceBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RestoreInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RestoreInstanceBody): RestoreInstanceRequest {
        this['body'] = body;
        return this;
    }
}