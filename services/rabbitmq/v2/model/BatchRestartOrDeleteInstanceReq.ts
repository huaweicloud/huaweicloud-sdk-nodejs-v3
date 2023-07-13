

export class BatchRestartOrDeleteInstanceReq {
    public instances?: Array<string>;
    public action: BatchRestartOrDeleteInstanceReqActionEnum;
    private 'all_failure'?: BatchRestartOrDeleteInstanceReqAllFailureEnum | undefined;
    public constructor(action?: any) { 
        this['action'] = action;
    }
    public withInstances(instances: Array<string>): BatchRestartOrDeleteInstanceReq {
        this['instances'] = instances;
        return this;
    }
    public withAction(action: BatchRestartOrDeleteInstanceReqActionEnum): BatchRestartOrDeleteInstanceReq {
        this['action'] = action;
        return this;
    }
    public withAllFailure(allFailure: BatchRestartOrDeleteInstanceReqAllFailureEnum): BatchRestartOrDeleteInstanceReq {
        this['all_failure'] = allFailure;
        return this;
    }
    public set allFailure(allFailure: BatchRestartOrDeleteInstanceReqAllFailureEnum | undefined) {
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
export enum BatchRestartOrDeleteInstanceReqActionEnum {
    RESTART = 'restart',
    DELETE = 'delete'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchRestartOrDeleteInstanceReqAllFailureEnum {
    RABBITMQ = 'rabbitmq'
}
