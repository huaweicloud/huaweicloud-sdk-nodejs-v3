

export class Info {
    public type?: string;
    public quota?: number;
    public used?: number;
    public unit?: string;
    public constructor() { 
    }
    public withType(type: string): Info {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): Info {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): Info {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): Info {
        this['unit'] = unit;
        return this;
    }
}