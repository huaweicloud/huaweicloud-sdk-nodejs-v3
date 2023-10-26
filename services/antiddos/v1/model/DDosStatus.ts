

export class DDosStatus {
    private 'floating_ip_id'?: string;
    private 'floating_ip_address'?: string;
    private 'network_type'?: string;
    public status?: string;
    private 'blackhole_endtime'?: number;
    private 'protect_type'?: string;
    private 'traffic_threshold'?: number;
    private 'http_threshold'?: number;
    public constructor(floatingIpId?: string, floatingIpAddress?: string, networkType?: string, status?: string, blackholeEndtime?: number, protectType?: string, trafficThreshold?: number, httpThreshold?: number) { 
        this['floating_ip_id'] = floatingIpId;
        this['floating_ip_address'] = floatingIpAddress;
        this['network_type'] = networkType;
        this['status'] = status;
        this['blackhole_endtime'] = blackholeEndtime;
        this['protect_type'] = protectType;
        this['traffic_threshold'] = trafficThreshold;
        this['http_threshold'] = httpThreshold;
    }
    public withFloatingIpId(floatingIpId: string): DDosStatus {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): DDosStatus {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withNetworkType(networkType: string): DDosStatus {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withStatus(status: string): DDosStatus {
        this['status'] = status;
        return this;
    }
    public withBlackholeEndtime(blackholeEndtime: number): DDosStatus {
        this['blackhole_endtime'] = blackholeEndtime;
        return this;
    }
    public set blackholeEndtime(blackholeEndtime: number  | undefined) {
        this['blackhole_endtime'] = blackholeEndtime;
    }
    public get blackholeEndtime(): number | undefined {
        return this['blackhole_endtime'];
    }
    public withProtectType(protectType: string): DDosStatus {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
    public withTrafficThreshold(trafficThreshold: number): DDosStatus {
        this['traffic_threshold'] = trafficThreshold;
        return this;
    }
    public set trafficThreshold(trafficThreshold: number  | undefined) {
        this['traffic_threshold'] = trafficThreshold;
    }
    public get trafficThreshold(): number | undefined {
        return this['traffic_threshold'];
    }
    public withHttpThreshold(httpThreshold: number): DDosStatus {
        this['http_threshold'] = httpThreshold;
        return this;
    }
    public set httpThreshold(httpThreshold: number  | undefined) {
        this['http_threshold'] = httpThreshold;
    }
    public get httpThreshold(): number | undefined {
        return this['http_threshold'];
    }
}