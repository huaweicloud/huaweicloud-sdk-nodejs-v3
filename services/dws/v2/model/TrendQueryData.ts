

export class TrendQueryData {
    public result?: string;
    public timestamp?: number;
    public constructor() { 
    }
    public withResult(result: string): TrendQueryData {
        this['result'] = result;
        return this;
    }
    public withTimestamp(timestamp: number): TrendQueryData {
        this['timestamp'] = timestamp;
        return this;
    }
}