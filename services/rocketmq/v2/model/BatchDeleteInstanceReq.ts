

export class BatchDeleteInstanceReq {
    public instances?: Array<string>;
    public action: BatchDeleteInstanceReqActionEnum;
    private 'all_failure'?: BatchDeleteInstanceReqAllFailureEnum | undefined;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withInstances(instances: Array<string>): BatchDeleteInstanceReq {
        this['instances'] = instances;
        return this;
    }
    public withAction(action: BatchDeleteInstanceReqActionEnum): BatchDeleteInstanceReq {
        this['action'] = action;
        return this;
    }
    public withAllFailure(allFailure: BatchDeleteInstanceReqAllFailureEnum): BatchDeleteInstanceReq {
        this['all_failure'] = allFailure;
        return this;
    }
    public set allFailure(allFailure: BatchDeleteInstanceReqAllFailureEnum | undefined) {
        this['all_failure'] = allFailure;
    }
    public get allFailure() {
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
