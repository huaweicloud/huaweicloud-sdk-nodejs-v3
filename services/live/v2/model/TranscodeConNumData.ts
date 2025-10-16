

export class TranscodeConNumData {
    public time?: string;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: string): TranscodeConNumData {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): TranscodeConNumData {
        this['value'] = value;
        return this;
    }
}