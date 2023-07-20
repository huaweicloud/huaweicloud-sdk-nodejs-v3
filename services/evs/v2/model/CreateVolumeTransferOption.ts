

export class CreateVolumeTransferOption {
    public name?: string;
    private 'volume_id'?: string;
    public constructor(name?: string, volumeId?: string) { 
        this['name'] = name;
        this['volume_id'] = volumeId;
    }
    public withName(name: string): CreateVolumeTransferOption {
        this['name'] = name;
        return this;
    }
    public withVolumeId(volumeId: string): CreateVolumeTransferOption {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
}