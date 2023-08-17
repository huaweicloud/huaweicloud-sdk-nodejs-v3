

export class BatchRestartOrDeleteInstanceReq {
    public instances?: Array<string>;
    public action?: BatchRestartOrDeleteInstanceReqActionEnum | string;
    public allFailure?: BatchRestartOrDeleteInstanceReqAllFailureEnum | string;
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
        this['allFailure'] = allFailure;
        return this;
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
