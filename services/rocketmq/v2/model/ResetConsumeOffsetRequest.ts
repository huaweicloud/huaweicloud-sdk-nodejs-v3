import { ResetConsumeOffsetReq } from './ResetConsumeOffsetReq';


export class ResetConsumeOffsetRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public body?: ResetConsumeOffsetReq;
    public constructor(engine?: string, instanceId?: string, group?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withEngine(engine: string): ResetConsumeOffsetRequest {
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
    public withGroup(group: string): ResetConsumeOffsetRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: ResetConsumeOffsetReq): ResetConsumeOffsetRequest {
        this['body'] = body;
        return this;
    }
}