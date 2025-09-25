

export class KernelTimeDetails {
    private 'parse_time'?: number;
    private 'rewrite_time'?: number;
    private 'plan_time'?: number;
    private 'execution_time'?: number;
    private 'other_time'?: number;
    public constructor(parseTime?: number, rewriteTime?: number, planTime?: number, executionTime?: number, otherTime?: number) { 
        this['parse_time'] = parseTime;
        this['rewrite_time'] = rewriteTime;
        this['plan_time'] = planTime;
        this['execution_time'] = executionTime;
        this['other_time'] = otherTime;
    }
    public withParseTime(parseTime: number): KernelTimeDetails {
        this['parse_time'] = parseTime;
        return this;
    }
    public set parseTime(parseTime: number  | undefined) {
        this['parse_time'] = parseTime;
    }
    public get parseTime(): number | undefined {
        return this['parse_time'];
    }
    public withRewriteTime(rewriteTime: number): KernelTimeDetails {
        this['rewrite_time'] = rewriteTime;
        return this;
    }
    public set rewriteTime(rewriteTime: number  | undefined) {
        this['rewrite_time'] = rewriteTime;
    }
    public get rewriteTime(): number | undefined {
        return this['rewrite_time'];
    }
    public withPlanTime(planTime: number): KernelTimeDetails {
        this['plan_time'] = planTime;
        return this;
    }
    public set planTime(planTime: number  | undefined) {
        this['plan_time'] = planTime;
    }
    public get planTime(): number | undefined {
        return this['plan_time'];
    }
    public withExecutionTime(executionTime: number): KernelTimeDetails {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withOtherTime(otherTime: number): KernelTimeDetails {
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