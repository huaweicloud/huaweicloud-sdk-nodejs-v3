

export class CustomVariable {
    private 'pipeline_id'?: string;
    public name?: string;
    public sequence?: number;
    public type?: string;
    public value?: string;
    private 'is_secret'?: boolean;
    public description?: string;
    private 'is_runtime'?: boolean;
    public limits?: Array<object>;
    private 'is_reset'?: boolean;
    private 'latest_value'?: string;
    private 'runtime_value'?: string;
    public constructor() { 
    }
    public withPipelineId(pipelineId: string): CustomVariable {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withName(name: string): CustomVariable {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: number): CustomVariable {
        this['sequence'] = sequence;
        return this;
    }
    public withType(type: string): CustomVariable {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): CustomVariable {
        this['value'] = value;
        return this;
    }
    public withIsSecret(isSecret: boolean): CustomVariable {
        this['is_secret'] = isSecret;
        return this;
    }
    public set isSecret(isSecret: boolean  | undefined) {
        this['is_secret'] = isSecret;
    }
    public get isSecret(): boolean | undefined {
        return this['is_secret'];
    }
    public withDescription(description: string): CustomVariable {
        this['description'] = description;
        return this;
    }
    public withIsRuntime(isRuntime: boolean): CustomVariable {
        this['is_runtime'] = isRuntime;
        return this;
    }
    public set isRuntime(isRuntime: boolean  | undefined) {
        this['is_runtime'] = isRuntime;
    }
    public get isRuntime(): boolean | undefined {
        return this['is_runtime'];
    }
    public withLimits(limits: Array<object>): CustomVariable {
        this['limits'] = limits;
        return this;
    }
    public withIsReset(isReset: boolean): CustomVariable {
        this['is_reset'] = isReset;
        return this;
    }
    public set isReset(isReset: boolean  | undefined) {
        this['is_reset'] = isReset;
    }
    public get isReset(): boolean | undefined {
        return this['is_reset'];
    }
    public withLatestValue(latestValue: string): CustomVariable {
        this['latest_value'] = latestValue;
        return this;
    }
    public set latestValue(latestValue: string  | undefined) {
        this['latest_value'] = latestValue;
    }
    public get latestValue(): string | undefined {
        return this['latest_value'];
    }
    public withRuntimeValue(runtimeValue: string): CustomVariable {
        this['runtime_value'] = runtimeValue;
        return this;
    }
    public set runtimeValue(runtimeValue: string  | undefined) {
        this['runtime_value'] = runtimeValue;
    }
    public get runtimeValue(): string | undefined {
        return this['runtime_value'];
    }
}