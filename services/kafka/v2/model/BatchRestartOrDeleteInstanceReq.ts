

export class BatchRestartOrDeleteInstanceReq {
    public instances?: Array<string>;
    public action?: BatchRestartOrDeleteInstanceReqActionEnum | string;
    private 'all_failure'?: BatchRestartOrDeleteInstanceReqAllFailureEnum | string;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withInstances(instances: Array<string>): BatchRestartOrDeleteInstanceReq {
        this['instances'] = instances;
        return this;
    }
    public withAction(action: BatchRestartOrDeleteInstanceReqActionEnum | string): BatchRestartOrDeleteInstanceReq {
        this['action'] = action;
        return this;
    }
    public withAllFailure(allFailure: BatchRestartOrDeleteInstanceReqAllFailureEnum | string): BatchRestartOrDeleteInstanceReq {
        this['all_failure'] = allFailure;
        return this;
    }
    public set allFailure(allFailure: BatchRestartOrDeleteInstanceReqAllFailureEnum | string  | undefined) {
        this['all_failure'] = allFailure;
    }
    public get allFailure(): BatchRestartOrDeleteInstanceReqAllFailureEnum | string | undefined {
        return this['all_failure'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchRestartOrDeleteInstanceReqActionEnum {
    RESTART = 'restart',
    DELETE = 'delete'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchRestartOrDeleteInstanceReqAllFailureEnum {
    KAFKA = 'kafka'
}
