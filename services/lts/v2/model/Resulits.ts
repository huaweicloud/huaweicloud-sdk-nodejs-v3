

export class Resulits {
    public timestamp?: number;
    public value?: number;
    public constructor() { 
    }
    public withTimestamp(timestamp: number): Resulits {
        this['timestamp'] = timestamp;
        return this;
    }
    public withValue(value: number): Resulits {
        this['value'] = value;
        return this;
    }
}