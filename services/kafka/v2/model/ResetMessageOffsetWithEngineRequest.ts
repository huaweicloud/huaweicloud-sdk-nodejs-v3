import { ResetMessageOffsetReq } from './ResetMessageOffsetReq';


export class ResetMessageOffsetWithEngineRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public body?: ResetMessageOffsetReq;
    public constructor(engine?: string, instanceId?: string, group?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withEngine(engine: string): ResetMessageOffsetWithEngineRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ResetMessageOffsetWithEngineRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ResetMessageOffsetWithEngineRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: ResetMessageOffsetReq): ResetMessageOffsetWithEngineRequest {
        this['body'] = body;
        return this;
    }
}