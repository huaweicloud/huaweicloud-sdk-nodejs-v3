import { ModifyInstanceConfigsReq } from './ModifyInstanceConfigsReq';


export class ModifyInstanceConfigsRequest {
    private 'instance_id'?: string;
    public body?: ModifyInstanceConfigsReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyInstanceConfigsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyInstanceConfigsReq): ModifyInstanceConfigsRequest {
        this['body'] = body;
        return this;
    }
}