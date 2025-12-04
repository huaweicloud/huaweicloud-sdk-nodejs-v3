import { ModifyElbVipOpenReq } from './ModifyElbVipOpenReq';


export class ModifyEipRequest {
    private 'instance_id'?: string;
    public body?: ModifyElbVipOpenReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyEipRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyElbVipOpenReq): ModifyEipRequest {
        this['body'] = body;
        return this;
    }
}