import { ResizeInstanceRequestBody } from './ResizeInstanceRequestBody';


export class ResizeInstanceRequest {
    private 'instance_id'?: string;
    public body?: ResizeInstanceRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeInstanceRequestBody): ResizeInstanceRequest {
        this['body'] = body;
        return this;
    }
}