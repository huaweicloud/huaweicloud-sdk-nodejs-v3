

export class ProcessStatisticResponseInfo {
    public path?: string;
    public num?: number;
    public constructor() { 
    }
    public withPath(path: string): ProcessStatisticResponseInfo {
        this['path'] = path;
        return this;
    }
    public withNum(num: number): ProcessStatisticResponseInfo {
        this['num'] = num;
        return this;
    }
}