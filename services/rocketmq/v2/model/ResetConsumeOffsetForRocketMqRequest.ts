import { ResetConsumeOffsetReq } from './ResetConsumeOffsetReq';


export class ResetConsumeOffsetForRocketMqRequest {
    private 'instance_id'?: string;
    public group?: string;
    public body?: ResetConsumeOffsetReq;
    public constructor(instanceId?: string, group?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): ResetConsumeOffsetForRocketMqRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ResetConsumeOffsetForRocketMqRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: ResetConsumeOffsetReq): ResetConsumeOffsetForRocketMqRequest {
        this['body'] = body;
        return this;
    }
}