

export class KernelModuleStatisticsResponseInfo {
    public name?: string;
    public num?: number;
    public constructor() { 
    }
    public withName(name: string): KernelModuleStatisticsResponseInfo {
        this['name'] = name;
        return this;
    }
    public withNum(num: number): KernelModuleStatisticsResponseInfo {
        this['num'] = num;
        return this;
    }
}