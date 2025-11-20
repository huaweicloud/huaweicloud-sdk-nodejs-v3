

export class SourceIp {
    private 'data_center'?: string;
    public isp?: string;
    public ip?: Array<string>;
    public constructor() { 
    }
    public withDataCenter(dataCenter: string): SourceIp {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): string | undefined {
        return this['data_center'];
    }
    public withIsp(isp: string): SourceIp {
        this['isp'] = isp;
        return this;
    }
    public withIp(ip: Array<string>): SourceIp {
        this['ip'] = ip;
        return this;
    }
}