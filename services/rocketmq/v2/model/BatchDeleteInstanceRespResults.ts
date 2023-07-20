

export class BatchDeleteInstanceRespResults {
    public result?: BatchDeleteInstanceRespResultsResultEnum | string;
    public instance?: string;
    public constructor() { 
    }
    public withResult(result: BatchDeleteInstanceRespResultsResultEnum | string): BatchDeleteInstanceRespResults {
        this['result'] = result;
        return this;
    }
    public withInstance(instance: string): BatchDeleteInstanceRespResults {
        this['instance'] = instance;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteInstanceRespResultsResultEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
