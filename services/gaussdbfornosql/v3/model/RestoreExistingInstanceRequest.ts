import { RestoreRequestBody } from './RestoreRequestBody';


export class RestoreExistingInstanceRequest {
    private 'instance_id'?: string;
    public body?: RestoreRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RestoreExistingInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RestoreRequestBody): RestoreExistingInstanceRequest {
        this['body'] = body;
        return this;
    }
}