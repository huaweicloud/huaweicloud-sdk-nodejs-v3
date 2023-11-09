

export class BatchDeleteInstanceReq {
    public instances?: Array<string>;
    public action?: BatchDeleteInstanceReqActionEnum | string;
    private 'all_failure'?: BatchDeleteInstanceReqAllFailureEnum | string;
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
        this['all_failure'] = allFailure;
        return this;
    }
    public set allFailure(allFailure: BatchDeleteInstanceReqAllFailureEnum | string  | undefined) {
        this['all_failure'] = allFailure;
    }
    public get allFailure(): BatchDeleteInstanceReqAllFailureEnum | string | undefined {
        return this['all_failure'];
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
