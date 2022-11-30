

export class PostPaidServerRootVolumeExtendParam {
    public resourceSpecCode?: string;
    public resourceType?: string;
    public snapshotId?: string;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): PostPaidServerRootVolumeExtendParam {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withResourceType(resourceType: string): PostPaidServerRootVolumeExtendParam {
        this['resourceType'] = resourceType;
        return this;
    }
    public withSnapshotId(snapshotId: string): PostPaidServerRootVolumeExtendParam {
        this['snapshotId'] = snapshotId;
        return this;
    }
}