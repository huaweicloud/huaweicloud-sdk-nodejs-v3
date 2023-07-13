import { CreateInstanceByEngineReq } from './CreateInstanceByEngineReq';


export class CreateInstanceByEngineRequest {
    public engine: CreateInstanceByEngineRequestEngineEnum;
    public body?: CreateInstanceByEngineReq;
    public constructor(engine?: any) { 
        this['engine'] = engine;
    }
    public withEngine(engine: CreateInstanceByEngineRequestEngineEnum): CreateInstanceByEngineRequest {
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
    RELIABILITY = 'reliability'
}
