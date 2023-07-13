

export class TranscodeSummary {
    public type?: string;
    public value?: number;
    public constructor() { 
    }
    public withType(type: string): TranscodeSummary {
        this['type'] = type;
        return this;
    }
    public withValue(value: number): TranscodeSummary {
        this['value'] = value;
        return this;
    }
}