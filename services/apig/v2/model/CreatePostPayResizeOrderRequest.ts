import { ResizeInstanceReq } from './ResizeInstanceReq';


export class CreatePostPayResizeOrderRequest {
    private 'instance_id'?: string;
    public body?: ResizeInstanceReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreatePostPayResizeOrderRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeInstanceReq): CreatePostPayResizeOrderRequest {
        this['body'] = body;
        return this;
    }
}