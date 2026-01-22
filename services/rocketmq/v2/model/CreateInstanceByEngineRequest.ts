import { CreateInstanceByEngineReq } from './CreateInstanceByEngineReq';


export class CreateInstanceByEngineRequest {
    public engine?: CreateInstanceByEngineRequestEngineEnum | string;
    public body?: CreateInstanceByEngineReq;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: CreateInstanceByEngineRequestEngineEnum | string): CreateInstanceByEngineRequest {
        this['engine'] = engine;
        return this;
    }
    public withBody(body: CreateInstanceByEngineReq): CreateInstanceByEngineRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineRequestEngineEnum {
    ROCKETMQ = 'rocketmq',
    RELIABILITY = 'reliability'
}
