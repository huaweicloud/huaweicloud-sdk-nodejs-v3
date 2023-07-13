

export class VolumeResp {
    public type: string;
    public size: number;
    public constructor(type?: any, size?: any) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: string): VolumeResp {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeResp {
        this['size'] = size;
        return this;
    }
}