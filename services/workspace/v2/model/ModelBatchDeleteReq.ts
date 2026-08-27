

export class ModelBatchDeleteReq {
    private 'model_ids'?: Array<string>;
    public constructor(modelIds?: Array<string>) { 
        this['model_ids'] = modelIds;
    }
    public withModelIds(modelIds: Array<string>): ModelBatchDeleteReq {
        this['model_ids'] = modelIds;
        return this;
    }
    public set modelIds(modelIds: Array<string>  | undefined) {
        this['model_ids'] = modelIds;
    }
    public get modelIds(): Array<string> | undefined {
        return this['model_ids'];
    }
}