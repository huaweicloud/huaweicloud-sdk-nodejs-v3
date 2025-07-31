

export class WebAppAndServiceStatisticResponseInfo {
    public name?: string;
    public num?: number;
    public constructor() { 
    }
    public withName(name: string): WebAppAndServiceStatisticResponseInfo {
        this['name'] = name;
        return this;
    }
    public withNum(num: number): WebAppAndServiceStatisticResponseInfo {
        this['num'] = num;
        return this;
    }
}