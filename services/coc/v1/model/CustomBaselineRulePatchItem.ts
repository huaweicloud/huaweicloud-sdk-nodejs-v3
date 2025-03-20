

export class CustomBaselineRulePatchItem {
    public name?: string;
    public version?: string;
    private 'created_time'?: number;
    public constructor() { 
    }
    public withName(name: string): CustomBaselineRulePatchItem {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): CustomBaselineRulePatchItem {
        this['version'] = version;
        return this;
    }
    public withCreatedTime(createdTime: number): CustomBaselineRulePatchItem {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
}