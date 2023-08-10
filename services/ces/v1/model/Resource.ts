

export class Resource {
    public type?: string;
    public used?: number;
    public unit?: string;
    public quota?: number;
    public constructor(type?: string, used?: number, unit?: string, quota?: number) { 
        this['type'] = type;
        this['used'] = used;
        this['unit'] = unit;
        this['quota'] = quota;
    }
    public withType(type: string): Resource {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Resource {
        this['used'] = used;
        return this;
    }
    public withUnit(unit: string): Resource {
        this['unit'] = unit;
        return this;
    }
    public withQuota(quota: number): Resource {
        this['quota'] = quota;
        return this;
    }
}