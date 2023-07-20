import { UpdateInstanceReq } from './UpdateInstanceReq';


export class UpdateInstanceRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceReq): UpdateInstanceRequest {
        this['body'] = body;
        return this;
    }
}