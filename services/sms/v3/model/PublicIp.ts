

export class PublicIp {
    public type: string;
    private 'bandwidth_size': number | undefined;
    private 'bandwidth_share_type'?: string | undefined;
    public constructor(type?: any, bandwidthSize?: any) { 
        this['type'] = type;
        this['bandwidth_size'] = bandwidthSize;
    }
    public withType(type: string): PublicIp {
        this['type'] = type;
        return this;
    }
    public withBandwidthSize(bandwidthSize: number): PublicIp {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize() {
        return this['bandwidth_size'];
    }
    public withBandwidthShareType(bandwidthShareType: string): PublicIp {
        this['bandwidth_share_type'] = bandwidthShareType;
        return this;
    }
    public set bandwidthShareType(bandwidthShareType: string | undefined) {
        this['bandwidth_share_type'] = bandwidthShareType;
    }
    public get bandwidthShareType() {
        return this['bandwidth_share_type'];
    }
}