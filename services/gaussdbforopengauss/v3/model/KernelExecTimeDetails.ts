

export class KernelExecTimeDetails {
    private 'execution_time'?: number;
    private 'other_time'?: number;
    public constructor(executionTime?: number, otherTime?: number) { 
        this['execution_time'] = executionTime;
        this['other_time'] = otherTime;
    }
    public withExecutionTime(executionTime: number): KernelExecTimeDetails {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withOtherTime(otherTime: number): KernelExecTimeDetails {
        this['other_time'] = otherTime;
        return this;
    }
    public set otherTime(otherTime: number  | undefined) {
        this['other_time'] = otherTime;
    }
    public get otherTime(): number | undefined {
        return this['other_time'];
    }
}