

export class PipelineVariable {
    public name?: string;
    public sequence?: number;
    public type?: string;
    public value?: string;
    private 'is_secret'?: boolean;
    public description?: string;
    private 'is_runtime'?: boolean;
    public limits?: Array<string>;
    private 'is_reset'?: boolean;
    private 'latest_value'?: string;
    public constructor() { 
    }
    public withName(name: string): PipelineVariable {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: number): PipelineVariable {
        this['sequence'] = sequence;
        return this;
    }
    public withType(type: string): PipelineVariable {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): PipelineVariable {
        this['value'] = value;
        return this;
    }
    public withIsSecret(isSecret: boolean): PipelineVariable {
        this['is_secret'] = isSecret;
        return this;
    }
    public set isSecret(isSecret: boolean  | undefined) {
        this['is_secret'] = isSecret;
    }
    public get isSecret(): boolean | undefined {
        return this['is_secret'];
    }
    public withDescription(description: string): PipelineVariable {
        this['description'] = description;
        return this;
    }
    public withIsRuntime(isRuntime: boolean): PipelineVariable {
        this['is_runtime'] = isRuntime;
        return this;
    }
    public set isRuntime(isRuntime: boolean  | undefined) {
        this['is_runtime'] = isRuntime;
    }
    public get isRuntime(): boolean | undefined {
        return this['is_runtime'];
    }
    public withLimits(limits: Array<string>): PipelineVariable {
        this['limits'] = limits;
        return this;
    }
    public withIsReset(isReset: boolean): PipelineVariable {
        this['is_reset'] = isReset;
        return this;
    }
    public set isReset(isReset: boolean  | undefined) {
        this['is_reset'] = isReset;
    }
    public get isReset(): boolean | undefined {
        return this['is_reset'];
    }
    public withLatestValue(latestValue: string): PipelineVariable {
        this['latest_value'] = latestValue;
        return this;
    }
    public set latestValue(latestValue: string  | undefined) {
        this['latest_value'] = latestValue;
    }
    public get latestValue(): string | undefined {
        return this['latest_value'];
    }
}