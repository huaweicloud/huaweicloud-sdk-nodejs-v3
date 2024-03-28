

export class AvailableZonesResp {
    public soldOut?: boolean;
    public id?: string;
    public code?: string;
    public name?: string;
    public port?: string;
    private 'resource_availability'?: string;
    private 'default_az'?: boolean;
    private 'remain_time'?: number;
    private 'ipv6_enable'?: boolean;
    public constructor() { 
    }
    public withSoldOut(soldOut: boolean): AvailableZonesResp {
        this['soldOut'] = soldOut;
        return this;
    }
    public withId(id: string): AvailableZonesResp {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): AvailableZonesResp {
        this['code'] = code;
        return this;
    }
    public withName(name: string): AvailableZonesResp {
        this['name'] = name;
        return this;
    }
    public withPort(port: string): AvailableZonesResp {
        this['port'] = port;
        return this;
    }
    public withResourceAvailability(resourceAvailability: string): AvailableZonesResp {
        this['resource_availability'] = resourceAvailability;
        return this;
    }
    public set resourceAvailability(resourceAvailability: string  | undefined) {
        this['resource_availability'] = resourceAvailability;
    }
    public get resourceAvailability(): string | undefined {
        return this['resource_availability'];
    }
    public withDefaultAz(defaultAz: boolean): AvailableZonesResp {
        this['default_az'] = defaultAz;
        return this;
    }
    public set defaultAz(defaultAz: boolean  | undefined) {
        this['default_az'] = defaultAz;
    }
    public get defaultAz(): boolean | undefined {
        return this['default_az'];
    }
    public withRemainTime(remainTime: number): AvailableZonesResp {
        this['remain_time'] = remainTime;
        return this;
    }
    public set remainTime(remainTime: number  | undefined) {
        this['remain_time'] = remainTime;
    }
    public get remainTime(): number | undefined {
        return this['remain_time'];
    }
    public withIpv6Enable(ipv6Enable: boolean): AvailableZonesResp {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
}