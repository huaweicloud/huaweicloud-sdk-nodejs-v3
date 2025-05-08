import { ResizeEngineInstanceReq } from './ResizeEngineInstanceReq';


export class ResizeKafkaInstanceRequest {
    private 'instance_id'?: string;
    public body?: ResizeEngineInstanceReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeKafkaInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeEngineInstanceReq): ResizeKafkaInstanceRequest {
        this['body'] = body;
        return this;
    }
}