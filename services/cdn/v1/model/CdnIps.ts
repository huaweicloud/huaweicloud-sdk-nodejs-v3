

export class CdnIps {
    public ip?: string;
    public belongs?: boolean;
    public region?: string;
    public isp?: string;
    public platform?: string;
    public constructor() { 
    }
    public withIp(ip: string): CdnIps {
        this['ip'] = ip;
        return this;
    }
    public withBelongs(belongs: boolean): CdnIps {
        this['belongs'] = belongs;
        return this;
    }
    public withRegion(region: string): CdnIps {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: string): CdnIps {
        this['isp'] = isp;
        return this;
    }
    public withPlatform(platform: string): CdnIps {
        this['platform'] = platform;
        return this;
    }
}