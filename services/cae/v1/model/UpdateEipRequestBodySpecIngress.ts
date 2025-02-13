

export class UpdateEipRequestBodySpecIngress {
    private 'bandwidth_size'?: number;
    public enabled?: boolean;
    public constructor() { 
    }
    public withBandwidthSize(bandwidthSize: number): UpdateEipRequestBodySpecIngress {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withEnabled(enabled: boolean): UpdateEipRequestBodySpecIngress {
        this['enabled'] = enabled;
        return this;
    }
}