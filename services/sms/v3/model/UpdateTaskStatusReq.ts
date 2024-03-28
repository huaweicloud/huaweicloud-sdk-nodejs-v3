

export class UpdateTaskStatusReq {
    public operation?: UpdateTaskStatusReqOperationEnum | string;
    public param?: { [key: string]: string; };
    private 'switch_hce'?: boolean;
    private 'is_need_consistency_check'?: boolean;
    public constructor(operation?: string) { 
        this['operation'] = operation;
    }
    public withOperation(operation: UpdateTaskStatusReqOperationEnum | string): UpdateTaskStatusReq {
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
    public set switchHce(switchHce: boolean  | undefined) {
        this['switch_hce'] = switchHce;
    }
    public get switchHce(): boolean | undefined {
        return this['switch_hce'];
    }
    public withIsNeedConsistencyCheck(isNeedConsistencyCheck: boolean): UpdateTaskStatusReq {
        this['is_need_consistency_check'] = isNeedConsistencyCheck;
        return this;
    }
    public set isNeedConsistencyCheck(isNeedConsistencyCheck: boolean  | undefined) {
        this['is_need_consistency_check'] = isNeedConsistencyCheck;
    }
    public get isNeedConsistencyCheck(): boolean | undefined {
        return this['is_need_consistency_check'];
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
    SYNC_FAILED_ROLLBACK = 'sync_failed_rollback',
    NETWORK_CHECK = 'network_check'
}
