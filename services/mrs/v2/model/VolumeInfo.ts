

export class VolumeInfo {
    public type?: string;
    public size?: number;
    public count?: number;
    public constructor(type?: string, size?: number, count?: number) { 
        this['type'] = type;
        this['size'] = size;
        this['count'] = count;
    }
    public withType(type: string): VolumeInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeInfo {
        this['size'] = size;
        return this;
    }
    public withCount(count: number): VolumeInfo {
        this['count'] = count;
        return this;
    }
}