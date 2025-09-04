import { BatchModifyGroupDescriptionReq } from './BatchModifyGroupDescriptionReq';


export class UpdateInstanceGroupRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public body?: BatchModifyGroupDescriptionReq;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): UpdateInstanceGroupRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): UpdateInstanceGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchModifyGroupDescriptionReq): UpdateInstanceGroupRequest {
        this['body'] = body;
        return this;
    }
}