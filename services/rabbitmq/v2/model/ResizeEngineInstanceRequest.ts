import { ResizeEngineInstanceReq } from './ResizeEngineInstanceReq';


export class ResizeEngineInstanceRequest {
    private 'instance_id': string | undefined;
    public engine: string;
    public body?: ResizeEngineInstanceReq;
    public constructor(instanceId?: any, engine?: any) { 
        this['instance_id'] = instanceId;
        this['engine'] = engine;
    }
    public withInstanceId(instanceId: string): ResizeEngineInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withEngine(engine: string): ResizeEngineInstanceRequest {
        this['engine'] = engine;
        return this;
    }
    public withBody(body: ResizeEngineInstanceReq): ResizeEngineInstanceRequest {
        this['body'] = body;
        return this;
    }
}