

export class UpdateTaskStatusReq {
    public operation?: UpdateTaskStatusReqOperationEnum | string;
    private 'template_id'?: string;
    private 'switch_hce'?: boolean;
    private 'is_need_consistency_check'?: boolean;
    public constructor(operation?: string) { 
        this['operation'] = operation;
    }
    public withOperation(operation: UpdateTaskStatusReqOperationEnum | string): UpdateTaskStatusReq {
        this['operation'] = operation;
        return this;
    }
    public withTemplateId(templateId: string): UpdateTaskStatusReq {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
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
    TEST = 'test',
    CLONE_TEST = 'clone_test',
    RESTART = 'restart',
    NETWORK_CHECK = 'network_check',
    CLEAR = 'clear',
    SKIP = 'skip',
    MIGRATION_TEST = 'migration_test'
}
