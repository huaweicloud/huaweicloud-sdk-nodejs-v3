

export class AvailabilityZone {
    public code: string;
    public state: string;
    public protocol?: Array<string>;
    public constructor(code?: any, state?: any) { 
        this['code'] = code;
        this['state'] = state;
    }
    public withCode(code: string): AvailabilityZone {
        this['code'] = code;
        return this;
    }
    public withState(state: string): AvailabilityZone {
        this['state'] = state;
        return this;
    }
    public withProtocol(protocol: Array<string>): AvailabilityZone {
        this['protocol'] = protocol;
        return this;
    }
}