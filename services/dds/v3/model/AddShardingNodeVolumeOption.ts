

export class AddShardingNodeVolumeOption {
    public size?: string;
    public constructor(size?: string) { 
        this['size'] = size;
    }
    public withSize(size: string): AddShardingNodeVolumeOption {
        this['size'] = size;
        return this;
    }
}