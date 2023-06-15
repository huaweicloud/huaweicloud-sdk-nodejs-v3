

export class TranscodeSpec {
    public type?: string;
    public value?: number;
    public constructor() { 
    }
    public withType(type: string): TranscodeSpec {
        this['type'] = type;
        return this;
    }
    public withValue(value: number): TranscodeSpec {
        this['value'] = value;
        return this;
    }
}