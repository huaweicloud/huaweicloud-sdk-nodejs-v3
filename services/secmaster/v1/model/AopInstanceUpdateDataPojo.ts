

export class AopInstanceUpdateDataPojo {
    private 'command_type'?: AopInstanceUpdateDataPojoCommandTypeEnum | string;
    private 'task_id'?: string;
    private 'input_dataobject'?: string;
    public constructor(commandType?: string) { 
        this['command_type'] = commandType;
    }
    public withCommandType(commandType: AopInstanceUpdateDataPojoCommandTypeEnum | string): AopInstanceUpdateDataPojo {
        this['command_type'] = commandType;
        return this;
    }
    public set commandType(commandType: AopInstanceUpdateDataPojoCommandTypeEnum | string  | undefined) {
        this['command_type'] = commandType;
    }
    public get commandType(): AopInstanceUpdateDataPojoCommandTypeEnum | string | undefined {
        return this['command_type'];
    }
    public withTaskId(taskId: string): AopInstanceUpdateDataPojo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInputDataobject(inputDataobject: string): AopInstanceUpdateDataPojo {
        this['input_dataobject'] = inputDataobject;
        return this;
    }
    public set inputDataobject(inputDataobject: string  | undefined) {
        this['input_dataobject'] = inputDataobject;
    }
    public get inputDataobject(): string | undefined {
        return this['input_dataobject'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AopInstanceUpdateDataPojoCommandTypeEnum {
    ACTIONINSTANCETERMINATECOMMAND = 'ActionInstanceTerminateCommand',
    ACTIONINSTANCERETRYCOMMAND = 'ActionInstanceRetryCommand',
    ACTIONINSTANCEDEBUGCOMMAND = 'ActionInstanceDebugCommand'
}
