

export class AvailableZone {
    public code?: string;
    public state?: string;
    public constructor() { 
    }
    public withCode(code: string): AvailableZone {
        this['code'] = code;
        return this;
    }
    public withState(state: string): AvailableZone {
        this['state'] = state;
        return this;
    }
}