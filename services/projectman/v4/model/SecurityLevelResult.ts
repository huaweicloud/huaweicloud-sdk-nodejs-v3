

export class SecurityLevelResult {
    public id?: string;
    private 'display_value'?: string;
    public value?: string;
    public code?: string;
    public sequence?: number;
    public constructor() { 
    }
    public withId(id: string): SecurityLevelResult {
        this['id'] = id;
        return this;
    }
    public withDisplayValue(displayValue: string): SecurityLevelResult {
        this['display_value'] = displayValue;
        return this;
    }
    public set displayValue(displayValue: string  | undefined) {
        this['display_value'] = displayValue;
    }
    public get displayValue(): string | undefined {
        return this['display_value'];
    }
    public withValue(value: string): SecurityLevelResult {
        this['value'] = value;
        return this;
    }
    public withCode(code: string): SecurityLevelResult {
        this['code'] = code;
        return this;
    }
    public withSequence(sequence: number): SecurityLevelResult {
        this['sequence'] = sequence;
        return this;
    }
}