

export class ShowClusterVolumeRsp {
    public type?: string;
    public size?: number;
    public constructor() { 
    }
    public withType(type: string): ShowClusterVolumeRsp {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): ShowClusterVolumeRsp {
        this['size'] = size;
        return this;
    }
}