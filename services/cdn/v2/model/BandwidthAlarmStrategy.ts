

export class BandwidthAlarmStrategy {
    public status?: string;
    public value?: number;
    public constructor() { 
    }
    public withStatus(status: string): BandwidthAlarmStrategy {
        this['status'] = status;
        return this;
    }
    public withValue(value: number): BandwidthAlarmStrategy {
        this['value'] = value;
        return this;
    }
}