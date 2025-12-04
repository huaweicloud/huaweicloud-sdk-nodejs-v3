

export class CreateCloudPhoneSingleServerRequestBodyDataVolume {
    private 'volume_type'?: string;
    public size?: number;
    public count?: number;
    public constructor(volumeType?: string, size?: number) { 
        this['volume_type'] = volumeType;
        this['size'] = size;
    }
    public withVolumeType(volumeType: string): CreateCloudPhoneSingleServerRequestBodyDataVolume {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withSize(size: number): CreateCloudPhoneSingleServerRequestBodyDataVolume {
        this['size'] = size;
        return this;
    }
    public withCount(count: number): CreateCloudPhoneSingleServerRequestBodyDataVolume {
        this['count'] = count;
        return this;
    }
}