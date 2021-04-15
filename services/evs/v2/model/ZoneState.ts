

export class ZoneState {
    public available?: boolean;
    public constructor() { 
    }
    public withAvailable(available: boolean): ZoneState {
        this['available'] = available;
        return this;
    }
}