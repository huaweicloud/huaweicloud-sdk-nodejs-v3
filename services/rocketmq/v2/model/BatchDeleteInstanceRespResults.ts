

export class BatchDeleteInstanceRespResults {
    public result?: BatchDeleteInstanceRespResultsResultEnum;
    public instance?: string;
    public constructor() { 
    }
    public withResult(result: BatchDeleteInstanceRespResultsResultEnum): BatchDeleteInstanceRespResults {
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
