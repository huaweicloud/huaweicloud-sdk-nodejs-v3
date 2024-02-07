

export class AttachInternetBandwidth {
    private 'global_eip_segment_id'?: string;
    private 'internet_bandwidth_id'?: string;
    public constructor(globalEipSegmentId?: string, internetBandwidthId?: string) { 
        this['global_eip_segment_id'] = globalEipSegmentId;
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public withGlobalEipSegmentId(globalEipSegmentId: string): AttachInternetBandwidth {
        this['global_eip_segment_id'] = globalEipSegmentId;
        return this;
    }
    public set globalEipSegmentId(globalEipSegmentId: string  | undefined) {
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public get globalEipSegmentId(): string | undefined {
        return this['global_eip_segment_id'];
    }
    public withInternetBandwidthId(internetBandwidthId: string): AttachInternetBandwidth {
        this['internet_bandwidth_id'] = internetBandwidthId;
        return this;
    }
    public set internetBandwidthId(internetBandwidthId: string  | undefined) {
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public get internetBandwidthId(): string | undefined {
        return this['internet_bandwidth_id'];
    }
}