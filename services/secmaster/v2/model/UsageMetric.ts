

export class UsageMetric {
    public used?: string;
    private 'un_used'?: string;
    private 'is_percentage'?: boolean;
    public constructor() { 
    }
    public withUsed(used: string): UsageMetric {
        this['used'] = used;
        return this;
    }
    public withUnUsed(unUsed: string): UsageMetric {
        this['un_used'] = unUsed;
        return this;
    }
    public set unUsed(unUsed: string  | undefined) {
        this['un_used'] = unUsed;
    }
    public get unUsed(): string | undefined {
        return this['un_used'];
    }
    public withIsPercentage(isPercentage: boolean): UsageMetric {
        this['is_percentage'] = isPercentage;
        return this;
    }
    public set isPercentage(isPercentage: boolean  | undefined) {
        this['is_percentage'] = isPercentage;
    }
    public get isPercentage(): boolean | undefined {
        return this['is_percentage'];
    }
}