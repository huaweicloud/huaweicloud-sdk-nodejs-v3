

export class SlowLogTopInfo {
    private 'object_name'?: string;
    public count?: number;
    public percent?: number;
    public total?: number;
    public constructor() { 
    }
    public withObjectName(objectName: string): SlowLogTopInfo {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withCount(count: number): SlowLogTopInfo {
        this['count'] = count;
        return this;
    }
    public withPercent(percent: number): SlowLogTopInfo {
        this['percent'] = percent;
        return this;
    }
    public withTotal(total: number): SlowLogTopInfo {
        this['total'] = total;
        return this;
    }
}