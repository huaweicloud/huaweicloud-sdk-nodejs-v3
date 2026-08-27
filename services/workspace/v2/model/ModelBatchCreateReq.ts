import { CreateModelReq } from './CreateModelReq';


export class ModelBatchCreateReq {
    public models?: Array<CreateModelReq>;
    public constructor(models?: Array<CreateModelReq>) { 
        this['models'] = models;
    }
    public withModels(models: Array<CreateModelReq>): ModelBatchCreateReq {
        this['models'] = models;
        return this;
    }
}