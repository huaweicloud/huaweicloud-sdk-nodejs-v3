

export class UpdateTaskStatusReq {
    public operation: UpdateTaskStatusReqOperationEnum;
    public param?: { [key: string]: string; };
    private 'switch_hce'?: boolean | undefined;
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
    public withSwitchHce(switchHce: boolean): UpdateTaskStatusReq {
        this['switch_hce'] = switchHce;
        return this;
    }
    public set switchHce(switchHce: boolean | undefined) {
        this['switch_hce'] = switchHce;
    }
    public get switchHce() {
        return this['switch_hce'];
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
