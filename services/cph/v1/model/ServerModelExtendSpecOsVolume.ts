

export class ServerModelExtendSpecOsVolume {
    public size?: number;
    private 'volume_type'?: string;
    public constructor() { 
    }
    public withSize(size: number): ServerModelExtendSpecOsVolume {
        this['size'] = size;
        return this;
    }
    public withVolumeType(volumeType: string): ServerModelExtendSpecOsVolume {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
}