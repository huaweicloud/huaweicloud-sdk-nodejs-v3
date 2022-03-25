

export class NodeExecution {
    public status?: NodeExecutionStatusEnum;
    public input?: object;
    public output?: object;
    private 'begin_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    private 'error_message'?: object | undefined;
    public constructor() { 
    }
    public withStatus(status: NodeExecutionStatusEnum): NodeExecution {
        this['status'] = status;
        return this;
    }
    public withInput(input: object): NodeExecution {
        this['input'] = input;
        return this;
    }
    public withOutput(output: object): NodeExecution {
        this['output'] = output;
        return this;
    }
    public withBeginTime(beginTime: number): NodeExecution {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): NodeExecution {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withErrorMessage(errorMessage: object): NodeExecution {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: object | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeExecutionStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    CANCEL = 'cancel'
}
