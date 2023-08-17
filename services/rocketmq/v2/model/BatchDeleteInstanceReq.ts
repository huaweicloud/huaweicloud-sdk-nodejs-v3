

export class BatchDeleteInstanceReq {
    public instances?: Array<string>;
    public action?: BatchDeleteInstanceReqActionEnum | string;
    public allFailure?: BatchDeleteInstanceReqAllFailureEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withInstances(instances: Array<string>): BatchDeleteInstanceReq {
        this['instances'] = instances;
        return this;
    }
    public withAction(action: BatchDeleteInstanceReqActionEnum | string): BatchDeleteInstanceReq {
        this['action'] = action;
        return this;
    }
    public withAllFailure(allFailure: BatchDeleteInstanceReqAllFailureEnum | string): BatchDeleteInstanceReq {
        this['allFailure'] = allFailure;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteInstanceReqActionEnum {
    DELETE = 'delete'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteInstanceReqAllFailureEnum {
    RELIABILITY = 'reliability'
}
