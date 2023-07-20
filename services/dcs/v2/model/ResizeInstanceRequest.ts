import { ResizeInstanceBody } from './ResizeInstanceBody';


export class ResizeInstanceRequest {
    private 'instance_id'?: string;
    public body?: ResizeInstanceBody;
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
    public withBody(body: ResizeInstanceBody): ResizeInstanceRequest {
        this['body'] = body;
        return this;
    }
}