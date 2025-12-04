

export class ChangeCloudPhoneServerRequestBodyPhoneDataVolume {
    private 'volume_type'?: string;
    public size?: number;
    public constructor(volumeType?: string, size?: number) { 
        this['volume_type'] = volumeType;
        this['size'] = size;
    }
    public withVolumeType(volumeType: string): ChangeCloudPhoneServerRequestBodyPhoneDataVolume {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withSize(size: number): ChangeCloudPhoneServerRequestBodyPhoneDataVolume {
        this['size'] = size;
        return this;
    }
}