import { ResetMessageOffsetReq } from './ResetMessageOffsetReq';


export class ResetMessageOffsetRequest {
    private 'instance_id': string | undefined;
    public group: string;
    public body?: ResetMessageOffsetReq;
    public constructor(instanceId?: any, group?: any) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): ResetMessageOffsetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withGroup(group: string): ResetMessageOffsetRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: ResetMessageOffsetReq): ResetMessageOffsetRequest {
        this['body'] = body;
        return this;
    }
}