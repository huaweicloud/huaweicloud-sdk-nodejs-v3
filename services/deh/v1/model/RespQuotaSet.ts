

export class RespQuotaSet {
    public resource?: string;
    private 'hard_limit'?: number;
    public used?: number;
    public constructor(resource?: string, hardLimit?: number, used?: number) { 
        this['resource'] = resource;
        this['hard_limit'] = hardLimit;
        this['used'] = used;
    }
    public withResource(resource: string): RespQuotaSet {
        this['resource'] = resource;
        return this;
    }
    public withHardLimit(hardLimit: number): RespQuotaSet {
        this['hard_limit'] = hardLimit;
        return this;
    }
    public set hardLimit(hardLimit: number  | undefined) {
        this['hard_limit'] = hardLimit;
    }
    public get hardLimit(): number | undefined {
        return this['hard_limit'];
    }
    public withUsed(used: number): RespQuotaSet {
        this['used'] = used;
        return this;
    }
}