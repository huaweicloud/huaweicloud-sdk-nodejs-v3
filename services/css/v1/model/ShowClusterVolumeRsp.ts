

export class ShowClusterVolumeRsp {
    public type?: string;
    public size?: number;
    public resourceIds?: Array<string>;
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
    public withResourceIds(resourceIds: Array<string>): ShowClusterVolumeRsp {
        this['resourceIds'] = resourceIds;
        return this;
    }
}