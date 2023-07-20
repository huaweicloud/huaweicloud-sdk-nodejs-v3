import { ResizeEngineInstanceReq } from './ResizeEngineInstanceReq';


export class ResizeEngineInstanceRequest {
    private 'instance_id'?: string;
    public engine?: ResizeEngineInstanceRequestEngineEnum | string;
    public body?: ResizeEngineInstanceReq;
    public constructor(instanceId?: string, engine?: string) { 
        this['instance_id'] = instanceId;
        this['engine'] = engine;
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
    public withEngine(engine: ResizeEngineInstanceRequestEngineEnum | string): ResizeEngineInstanceRequest {
        this['engine'] = engine;
        return this;
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
    RABBITMQ = 'rabbitmq'
}
