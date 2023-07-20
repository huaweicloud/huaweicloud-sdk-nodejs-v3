

export class AttachSharebwDict {
    private 'bandwidth_id'?: string;
    public constructor() { 
    }
    public withBandwidthId(bandwidthId: string): AttachSharebwDict {
        this['bandwidth_id'] = bandwidthId;
        return this;
    }
    public set bandwidthId(bandwidthId: string  | undefined) {
        this['bandwidth_id'] = bandwidthId;
    }
    public get bandwidthId(): string | undefined {
        return this['bandwidth_id'];
    }
}