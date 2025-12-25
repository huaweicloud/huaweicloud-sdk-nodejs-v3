

export class AopworkflowVersionValidateRes {
    public mode?: AopworkflowVersionValidateResModeEnum | string;
    public taskconfig?: string;
    public taskflow?: string;
    private 'aopworkflow_id'?: string;
    public constructor(mode?: string, taskconfig?: string, taskflow?: string, aopworkflowId?: string) { 
        this['mode'] = mode;
        this['taskconfig'] = taskconfig;
        this['taskflow'] = taskflow;
        this['aopworkflow_id'] = aopworkflowId;
    }
    public withMode(mode: AopworkflowVersionValidateResModeEnum | string): AopworkflowVersionValidateRes {
        this['mode'] = mode;
        return this;
    }
    public withTaskconfig(taskconfig: string): AopworkflowVersionValidateRes {
        this['taskconfig'] = taskconfig;
        return this;
    }
    public withTaskflow(taskflow: string): AopworkflowVersionValidateRes {
        this['taskflow'] = taskflow;
        return this;
    }
    public withAopworkflowId(aopworkflowId: string): AopworkflowVersionValidateRes {
        this['aopworkflow_id'] = aopworkflowId;
        return this;
    }
    public set aopworkflowId(aopworkflowId: string  | undefined) {
        this['aopworkflow_id'] = aopworkflowId;
    }
    public get aopworkflowId(): string | undefined {
        return this['aopworkflow_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AopworkflowVersionValidateResModeEnum {
    BASIC = 'BASIC',
    CIRCLE = 'CIRCLE',
    APP_PARAMS = 'APP_PARAMS'
}
