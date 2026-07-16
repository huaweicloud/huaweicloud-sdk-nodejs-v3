

export class BindNodeItem {
    public name?: string;
    public quotaName?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): BindNodeItem {
        this['name'] = name;
        return this;
    }
    public withQuotaName(quotaName: string): BindNodeItem {
        this['quotaName'] = quotaName;
        return this;
    }
}