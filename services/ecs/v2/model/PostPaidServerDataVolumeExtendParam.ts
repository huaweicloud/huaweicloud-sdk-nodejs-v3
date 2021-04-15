

export class PostPaidServerDataVolumeExtendParam {
    public resourceSpecCode?: string;
    public resourceType?: string;
    public snapshotId?: string;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): PostPaidServerDataVolumeExtendParam {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withResourceType(resourceType: string): PostPaidServerDataVolumeExtendParam {
        this['resourceType'] = resourceType;
        return this;
    }
    public withSnapshotId(snapshotId: string): PostPaidServerDataVolumeExtendParam {
        this['snapshotId'] = snapshotId;
        return this;
    }
}