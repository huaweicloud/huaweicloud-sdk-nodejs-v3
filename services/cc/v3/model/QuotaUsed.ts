

export class QuotaUsed {
    public used?: number;
    public constructor(used?: number) { 
        this['used'] = used;
    }
    public withUsed(used: number): QuotaUsed {
        this['used'] = used;
        return this;
    }
}