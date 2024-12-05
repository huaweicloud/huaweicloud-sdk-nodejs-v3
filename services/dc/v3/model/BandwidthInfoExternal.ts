

export class BandwidthInfoExternal {
    private 'bandwidth_size'?: number;
    private 'gcb_id'?: string;
    private 'freeze_status'?: string;
    public constructor() { 
    }
    public withBandwidthSize(bandwidthSize: number): BandwidthInfoExternal {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: number  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): number | undefined {
        return this['bandwidth_size'];
    }
    public withGcbId(gcbId: string): BandwidthInfoExternal {
        this['gcb_id'] = gcbId;
        return this;
    }
    public set gcbId(gcbId: string  | undefined) {
        this['gcb_id'] = gcbId;
    }
    public get gcbId(): string | undefined {
        return this['gcb_id'];
    }
    public withFreezeStatus(freezeStatus: string): BandwidthInfoExternal {
        this['freeze_status'] = freezeStatus;
        return this;
    }
    public set freezeStatus(freezeStatus: string  | undefined) {
        this['freeze_status'] = freezeStatus;
    }
    public get freezeStatus(): string | undefined {
        return this['freeze_status'];
    }
}