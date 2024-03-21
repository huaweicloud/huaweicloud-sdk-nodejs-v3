

export class LiveRequestArgs {
    public delay?: string;
    public unit?: string;
    public constructor() { 
    }
    public withDelay(delay: string): LiveRequestArgs {
        this['delay'] = delay;
        return this;
    }
    public withUnit(unit: string): LiveRequestArgs {
        this['unit'] = unit;
        return this;
    }
}