

export class NodeExecution {
    public status?: NodeExecutionStatusEnum | string;
    public input?: object;
    public output?: object;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'error_message'?: object;
    private 'request_id'?: string;
    public constructor() { 
    }
    public withStatus(status: NodeExecutionStatusEnum | string): NodeExecution {
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
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): NodeExecution {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withErrorMessage(errorMessage: object): NodeExecution {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: object  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): object | undefined {
        return this['error_message'];
    }
    public withRequestId(requestId: string): NodeExecution {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
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
