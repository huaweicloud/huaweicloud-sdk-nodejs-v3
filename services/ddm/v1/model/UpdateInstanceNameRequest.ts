import { ModifyInstanceNameReq } from './ModifyInstanceNameReq';


export class UpdateInstanceNameRequest {
    private 'instance_id'?: string;
    public body?: ModifyInstanceNameReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyInstanceNameReq): UpdateInstanceNameRequest {
        this['body'] = body;
        return this;
    }
}