

export class ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo {
    private 'volume_type'?: string;
    public size?: number;
    public version?: number;
    public constructor() { 
    }
    public withVolumeType(volumeType: string): ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withSize(size: number): ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo {
        this['size'] = size;
        return this;
    }
    public withVersion(version: number): ShowCloudPhoneServerDetailResponseBodyShareVolumeInfo {
        this['version'] = version;
        return this;
    }
}