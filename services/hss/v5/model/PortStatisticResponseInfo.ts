

export class PortStatisticResponseInfo {
    public port?: number;
    public type?: string;
    public num?: number;
    public constructor() { 
    }
    public withPort(port: number): PortStatisticResponseInfo {
        this['port'] = port;
        return this;
    }
    public withType(type: string): PortStatisticResponseInfo {
        this['type'] = type;
        return this;
    }
    public withNum(num: number): PortStatisticResponseInfo {
        this['num'] = num;
        return this;
    }
}