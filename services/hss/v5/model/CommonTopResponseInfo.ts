

export class CommonTopResponseInfo {
    public name?: string;
    private 'host_num'?: number;
    public percentage?: number;
    public constructor() { 
    }
    public withName(name: string): CommonTopResponseInfo {
        this['name'] = name;
        return this;
    }
    public withHostNum(hostNum: number): CommonTopResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withPercentage(percentage: number): CommonTopResponseInfo {
        this['percentage'] = percentage;
        return this;
    }
}