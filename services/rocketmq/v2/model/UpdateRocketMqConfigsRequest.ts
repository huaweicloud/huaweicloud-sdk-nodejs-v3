import { ModifyConfigReq } from './ModifyConfigReq';


export class UpdateRocketMqConfigsRequest {
    private 'instance_id'?: string;
    public body?: ModifyConfigReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateRocketMqConfigsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyConfigReq): UpdateRocketMqConfigsRequest {
        this['body'] = body;
        return this;
    }
}