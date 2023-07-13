import { CreateInstanceReq } from './CreateInstanceReq';


export class CreatePostPaidInstanceByEngineRequest {
    public engine: CreatePostPaidInstanceByEngineRequestEngineEnum;
    public body?: CreateInstanceReq;
    public constructor(engine?: any) { 
        this['engine'] = engine;
    }
    public withEngine(engine: CreatePostPaidInstanceByEngineRequestEngineEnum): CreatePostPaidInstanceByEngineRequest {
        this['engine'] = engine;
        return this;
    }
    public withBody(body: CreateInstanceReq): CreatePostPaidInstanceByEngineRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceByEngineRequestEngineEnum {
    RABBITMQ = 'rabbitmq'
}
