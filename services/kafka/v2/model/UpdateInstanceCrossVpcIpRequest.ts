import { UpdateInstanceCrossVpcIpReq } from './UpdateInstanceCrossVpcIpReq';


export class UpdateInstanceCrossVpcIpRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceCrossVpcIpReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceCrossVpcIpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceCrossVpcIpReq): UpdateInstanceCrossVpcIpRequest {
        this['body'] = body;
        return this;
    }
}