import { InstanceChangeOrderReq } from './InstanceChangeOrderReq';


export class CreatePrepayResizeRequest {
    private 'instance_id'?: string;
    public body?: InstanceChangeOrderReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreatePrepayResizeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: InstanceChangeOrderReq): CreatePrepayResizeRequest {
        this['body'] = body;
        return this;
    }
}