import { ResizeEngineInstanceReq } from './ResizeEngineInstanceReq';


export class ResizeInstanceRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public body?: ResizeEngineInstanceReq;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): ResizeInstanceRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ResizeInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeEngineInstanceReq): ResizeInstanceRequest {
        this['body'] = body;
        return this;
    }
}