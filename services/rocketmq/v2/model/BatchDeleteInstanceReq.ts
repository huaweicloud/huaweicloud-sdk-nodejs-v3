

export class BatchDeleteInstanceReq {
    public instances?: Array<string>;
    public action?: BatchDeleteInstanceReqActionEnum | string;
    private 'all_failure'?: BatchDeleteInstanceReqAllFailureEnum | string;
    private 'force_delete'?: boolean;
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
    public withForceDelete(forceDelete: boolean): BatchDeleteInstanceReq {
        this['force_delete'] = forceDelete;
        return this;
    }
    public set forceDelete(forceDelete: boolean  | undefined) {
        this['force_delete'] = forceDelete;
    }
    public get forceDelete(): boolean | undefined {
        return this['force_delete'];
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
