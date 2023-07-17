import { ResizeInstanceReq } from './ResizeInstanceReq';


export class ResizeInstanceRequest {
    private 'instance_id': string | undefined;
    public body?: ResizeInstanceReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: ResizeInstanceReq): ResizeInstanceRequest {
        this['body'] = body;
        return this;
    }
}