import { ResizeEngineInstanceReq } from './ResizeEngineInstanceReq';


export class ResizeEngineInstanceRequest {
    public engine: string;
    private 'instance_id': string | undefined;
    public body?: ResizeEngineInstanceReq;
    public constructor(engine?: any, instanceId?: any) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: string): ResizeEngineInstanceRequest {
        this['engine'] = engine;
        return this;
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
    public withBody(body: ResizeEngineInstanceReq): ResizeEngineInstanceRequest {
        this['body'] = body;
        return this;
    }
}