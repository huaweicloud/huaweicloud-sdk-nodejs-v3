

export class ClusterVolumeRsp {
    public type?: string;
    public size?: number;
    public resourceIds?: Array<string>;
    public constructor() { 
    }
    public withType(type: string): ClusterVolumeRsp {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): ClusterVolumeRsp {
        this['size'] = size;
        return this;
    }
    public withResourceIds(resourceIds: Array<string>): ClusterVolumeRsp {
        this['resourceIds'] = resourceIds;
        return this;
    }
}