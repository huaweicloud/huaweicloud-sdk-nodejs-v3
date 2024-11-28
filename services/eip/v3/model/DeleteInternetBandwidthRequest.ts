

export class DeleteInternetBandwidthRequest {
    private 'internet_bandwidth_id'?: string;
    public constructor(internetBandwidthId?: string) { 
        this['internet_bandwidth_id'] = internetBandwidthId;
    }
    public withInternetBandwidthId(internetBandwidthId: string): DeleteInternetBandwidthRequest {
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