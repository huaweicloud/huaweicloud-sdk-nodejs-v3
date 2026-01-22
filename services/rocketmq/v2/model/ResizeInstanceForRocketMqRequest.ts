import { ResizeEngineInstanceReq } from './ResizeEngineInstanceReq';


export class ResizeInstanceForRocketMqRequest {
    private 'instance_id'?: string;
    public body?: ResizeEngineInstanceReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeInstanceForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeEngineInstanceReq): ResizeInstanceForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}