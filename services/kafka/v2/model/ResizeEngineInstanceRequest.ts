import { ResizeEngineInstanceReq } from './ResizeEngineInstanceReq';


export class ResizeEngineInstanceRequest {
    public engine?: ResizeEngineInstanceRequestEngineEnum | string;
    private 'instance_id'?: string;
    public body?: ResizeEngineInstanceReq;
    public constructor(engine?: string, instanceId?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
    }
    public withEngine(engine: ResizeEngineInstanceRequestEngineEnum | string): ResizeEngineInstanceRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): ResizeEngineInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeEngineInstanceReq): ResizeEngineInstanceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResizeEngineInstanceRequestEngineEnum {
    KAFKA = 'kafka'
}
