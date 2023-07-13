

export class DeleteSharedBandwidthRequest {
    private 'bandwidth_id': string | undefined;
    public constructor(bandwidthId?: any) { 
        this['bandwidth_id'] = bandwidthId;
    }
    public withBandwidthId(bandwidthId: string): DeleteSharedBandwidthRequest {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId() {
        return this['bandwidth_id'];
    }
}