

export class UpdateTaskStatusReq {
    public operation: UpdateTaskStatusReqOperationEnum;
    public param?: { [key: string]: string; };
    public constructor(operation?: any) { 
        this['operation'] = operation;
    }
    public withOperation(operation: UpdateTaskStatusReqOperationEnum): UpdateTaskStatusReq {
        this['operation'] = operation;
        return this;
    }
    public withParam(param: { [key: string]: string; }): UpdateTaskStatusReq {
        this['param'] = param;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTaskStatusReqOperationEnum {
    START = 'start',
    STOP = 'stop',
    COLLECT_LOG = 'collect_log',
    TEST = 'test',
    CLONE_TEST = 'clone_test',
    RESTART = 'restart',
    SYNC_FAILED_ROLLBACK = 'sync_failed_rollback'
}
