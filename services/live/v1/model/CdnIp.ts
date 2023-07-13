

export class CdnIp {
    public ip?: string;
    public belongs?: boolean;
    public region?: string;
    public isp?: string;
    public platform?: string;
    public constructor() { 
    }
    public withIp(ip: string): CdnIp {
        this['ip'] = ip;
        return this;
    }
    public withBelongs(belongs: boolean): CdnIp {
        this['belongs'] = belongs;
        return this;
    }
    public withRegion(region: string): CdnIp {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: string): CdnIp {
        this['isp'] = isp;
        return this;
    }
    public withPlatform(platform: string): CdnIp {
        this['platform'] = platform;
        return this;
    }
}