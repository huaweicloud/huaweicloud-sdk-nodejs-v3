

export class AttachServerVolumeOption {
    public device?: string;
    public volumeId?: string;
    private 'volume_type'?: string;
    public count?: number;
    private 'hw:passthrough'?: string;
    public constructor(volumeId?: string) { 
        this['volumeId'] = volumeId;
    }
    public withDevice(device: string): AttachServerVolumeOption {
        this['device'] = device;
        return this;
    }
    public withVolumeId(volumeId: string): AttachServerVolumeOption {
        this['volumeId'] = volumeId;
        return this;
    }
    public withVolumeType(volumeType: string): AttachServerVolumeOption {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withCount(count: number): AttachServerVolumeOption {
        this['count'] = count;
        return this;
    }
    public withHwPassthrough(hwPassthrough: string): AttachServerVolumeOption {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: string  | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough(): string | undefined {
        return this['hw:passthrough'];
    }
}