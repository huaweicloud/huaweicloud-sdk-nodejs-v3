import { ModifyInstanceSecurityGroupReq } from './ModifyInstanceSecurityGroupReq';


export class UpdateInstanceSecurityGroupRequest {
    private 'instance_id'?: string;
    public body?: ModifyInstanceSecurityGroupReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceSecurityGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyInstanceSecurityGroupReq): UpdateInstanceSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}