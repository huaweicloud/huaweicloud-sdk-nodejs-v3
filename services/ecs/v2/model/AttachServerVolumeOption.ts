

export class AttachServerVolumeOption {
    public device?: string;
    public volumeId: string;
    private 'volume_type'?: string | undefined;
    private 'hw:passthrough'?: string | undefined;
    public constructor(volumeId?: any) { 
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
    public set volumeType(volumeType: string | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
    public withHwPassthrough(hwPassthrough: string): AttachServerVolumeOption {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: string | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
}