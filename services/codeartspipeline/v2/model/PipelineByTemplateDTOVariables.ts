

export class PipelineByTemplateDTOVariables {
    public name?: object;
    public sequence?: number;
    public type?: string;
    public value?: string;
    private 'is_secret'?: boolean;
    public description?: string;
    private 'is_runtime'?: boolean;
    private 'is_reset'?: boolean;
    private 'latest_value'?: string;
    public limits?: Array<string>;
    public constructor() { 
    }
    public withName(name: object): PipelineByTemplateDTOVariables {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: number): PipelineByTemplateDTOVariables {
        this['sequence'] = sequence;
        return this;
    }
    public withType(type: string): PipelineByTemplateDTOVariables {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): PipelineByTemplateDTOVariables {
        this['value'] = value;
        return this;
    }
    public withIsSecret(isSecret: boolean): PipelineByTemplateDTOVariables {
        this['is_secret'] = isSecret;
        return this;
    }
    public set isSecret(isSecret: boolean  | undefined) {
        this['is_secret'] = isSecret;
    }
    public get isSecret(): boolean | undefined {
        return this['is_secret'];
    }
    public withDescription(description: string): PipelineByTemplateDTOVariables {
        this['description'] = description;
        return this;
    }
    public withIsRuntime(isRuntime: boolean): PipelineByTemplateDTOVariables {
        this['is_runtime'] = isRuntime;
        return this;
    }
    public set isRuntime(isRuntime: boolean  | undefined) {
        this['is_runtime'] = isRuntime;
    }
    public get isRuntime(): boolean | undefined {
        return this['is_runtime'];
    }
    public withIsReset(isReset: boolean): PipelineByTemplateDTOVariables {
        this['is_reset'] = isReset;
        return this;
    }
    public set isReset(isReset: boolean  | undefined) {
        this['is_reset'] = isReset;
    }
    public get isReset(): boolean | undefined {
        return this['is_reset'];
    }
    public withLatestValue(latestValue: string): PipelineByTemplateDTOVariables {
        this['latest_value'] = latestValue;
        return this;
    }
    public set latestValue(latestValue: string  | undefined) {
        this['latest_value'] = latestValue;
    }
    public get latestValue(): string | undefined {
        return this['latest_value'];
    }
    public withLimits(limits: Array<string>): PipelineByTemplateDTOVariables {
        this['limits'] = limits;
        return this;
    }
}