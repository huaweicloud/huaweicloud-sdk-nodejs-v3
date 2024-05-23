

export class QuotaDto {
    public type?: string;
    public quota?: number;
    public min?: number;
    public max?: number;
    public used?: number;
    public constructor(type?: string, quota?: number, min?: number, max?: number, used?: number) { 
        this['type'] = type;
        this['quota'] = quota;
        this['min'] = min;
        this['max'] = max;
        this['used'] = used;
    }
    public withType(type: string): QuotaDto {
        this['type'] = type;
        return this;
    }
    public withQuota(quota: number): QuotaDto {
        this['quota'] = quota;
        return this;
    }
    public withMin(min: number): QuotaDto {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): QuotaDto {
        this['max'] = max;
        return this;
    }
    public withUsed(used: number): QuotaDto {
        this['used'] = used;
        return this;
    }
}