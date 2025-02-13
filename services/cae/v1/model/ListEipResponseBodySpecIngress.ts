

export class ListEipResponseBodySpecIngress {
    private 'bandwidth_size'?: number;
    public enabled?: boolean;
    private 'ip_list'?: Array<string>;
    public constructor() { 
    }
    public withBandwidthSize(bandwidthSize: number): ListEipResponseBodySpecIngress {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withEnabled(enabled: boolean): ListEipResponseBodySpecIngress {
        this['enabled'] = enabled;
        return this;
    }
    public withIpList(ipList: Array<string>): ListEipResponseBodySpecIngress {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
}