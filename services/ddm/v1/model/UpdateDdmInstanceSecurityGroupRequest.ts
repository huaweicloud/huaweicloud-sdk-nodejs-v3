import { UpdateInstanceSecurityGroupV3RequestBody } from './UpdateInstanceSecurityGroupV3RequestBody';


export class UpdateDdmInstanceSecurityGroupRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceSecurityGroupV3RequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateDdmInstanceSecurityGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceSecurityGroupV3RequestBody): UpdateDdmInstanceSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}