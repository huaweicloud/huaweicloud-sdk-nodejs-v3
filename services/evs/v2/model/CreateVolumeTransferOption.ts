

export class CreateVolumeTransferOption {
    public name: string;
    private 'volume_id': string | undefined;
    public constructor(name?: any, volumeId?: any) { 
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
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
}