

export class ExecutionResultList {
    private 'node_id'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'function_execution_id'?: string;
    public output?: object;
    public status?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): ExecutionResultList {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBeginTime(beginTime: number): ExecutionResultList {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ExecutionResultList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withFunctionExecutionId(functionExecutionId: string): ExecutionResultList {
        this['function_execution_id'] = functionExecutionId;
        return this;
    }
    public set functionExecutionId(functionExecutionId: string  | undefined) {
        this['function_execution_id'] = functionExecutionId;
    }
    public get functionExecutionId(): string | undefined {
        return this['function_execution_id'];
    }
    public withOutput(output: object): ExecutionResultList {
        this['output'] = output;
        return this;
    }
    public withStatus(status: string): ExecutionResultList {
        this['status'] = status;
        return this;
    }
}