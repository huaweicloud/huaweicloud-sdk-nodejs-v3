

export class BatchAttachSharebwDict {
    private 'bandwidth_id'?: string;
    private 'publicip_id'?: string;
    public constructor() { 
    }
    public withBandwidthId(bandwidthId: string): BatchAttachSharebwDict {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
    public withPublicipId(publicipId: string): BatchAttachSharebwDict {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
}