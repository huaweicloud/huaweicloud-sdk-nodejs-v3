import { ResizeFlavorReq } from './ResizeFlavorReq';


export class ResizeFlavorRequest {
    private 'instance_id'?: string;
    public body?: ResizeFlavorReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeFlavorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeFlavorReq): ResizeFlavorRequest {
        this['body'] = body;
        return this;
    }
}