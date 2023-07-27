

export class IpDetails {
    private 'ip_address'?: string;
    private 'bandwidth_size'?: number;
    public constructor() { 
    }
    public withIpAddress(ipAddress: string): IpDetails {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withBandwidthSize(bandwidthSize: number): IpDetails {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
}