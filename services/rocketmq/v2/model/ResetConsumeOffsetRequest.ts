import { ResetConsumeOffsetReq } from './ResetConsumeOffsetReq';


export class ResetConsumeOffsetRequest {
    public engine?: ResetConsumeOffsetRequestEngineEnum | string;
    private 'instance_id'?: string;
    private 'group_id'?: string;
    public body?: ResetConsumeOffsetReq;
    public constructor(engine?: string, instanceId?: string, groupId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withEngine(engine: ResetConsumeOffsetRequestEngineEnum | string): ResetConsumeOffsetRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ResetConsumeOffsetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): ResetConsumeOffsetRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: ResetConsumeOffsetReq): ResetConsumeOffsetRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResetConsumeOffsetRequestEngineEnum {
    RELIABILITY = 'reliability'
}
