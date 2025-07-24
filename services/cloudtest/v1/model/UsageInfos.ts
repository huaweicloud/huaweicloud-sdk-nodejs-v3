

export class UsageInfos {
    public name?: string;
    public id?: string;
    public amount?: string;
    public used?: string;
    private 'used_percent'?: number;
    private 'usage_info'?: Array<UsageInfos>;
    public constructor() { 
    }
    public withName(name: string): UsageInfos {
        this['name'] = name;
        return this;
    }
    public withId(id: string): UsageInfos {
        this['id'] = id;
        return this;
    }
    public withAmount(amount: string): UsageInfos {
        this['amount'] = amount;
        return this;
    }
    public withUsed(used: string): UsageInfos {
        this['used'] = used;
        return this;
    }
    public withUsedPercent(usedPercent: number): UsageInfos {
        this['used_percent'] = usedPercent;
        return this;
    }
    public set usedPercent(usedPercent: number  | undefined) {
        this['used_percent'] = usedPercent;
    }
    public get usedPercent(): number | undefined {
        return this['used_percent'];
    }
    public withUsageInfo(usageInfo: Array<UsageInfos>): UsageInfos {
        this['usage_info'] = usageInfo;
        return this;
    }
    public set usageInfo(usageInfo: Array<UsageInfos>  | undefined) {
        this['usage_info'] = usageInfo;
    }
    public get usageInfo(): Array<UsageInfos> | undefined {
        return this['usage_info'];
    }
}