

export class AutoLaunchStatisticsResponseInfo {
    public name?: string;
    public type?: string;
    public num?: number;
    public constructor() { 
    }
    public withName(name: string): AutoLaunchStatisticsResponseInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): AutoLaunchStatisticsResponseInfo {
        this['type'] = type;
        return this;
    }
    public withNum(num: number): AutoLaunchStatisticsResponseInfo {
        this['num'] = num;
        return this;
    }
}