import { ResetConsumeOffsetReq } from './ResetConsumeOffsetReq';


export class ResetConsumeOffsetRequest {
    public engine: ResetConsumeOffsetRequestEngineEnum;
    private 'instance_id': string | undefined;
    private 'group_id': string | undefined;
    public body?: ResetConsumeOffsetReq;
    public constructor(engine?: any, instanceId?: any, groupId?: any) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withEngine(engine: ResetConsumeOffsetRequestEngineEnum): ResetConsumeOffsetRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ResetConsumeOffsetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): ResetConsumeOffsetRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
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
