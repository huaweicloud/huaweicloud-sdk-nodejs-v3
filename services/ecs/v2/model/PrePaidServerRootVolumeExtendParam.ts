

export class PrePaidServerRootVolumeExtendParam {
    public resourceSpecCode?: string;
    public resourceType?: string;
    public snapshotId?: string;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): PrePaidServerRootVolumeExtendParam {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withResourceType(resourceType: string): PrePaidServerRootVolumeExtendParam {
        this['resourceType'] = resourceType;
        return this;
    }
    public withSnapshotId(snapshotId: string): PrePaidServerRootVolumeExtendParam {
        this['snapshotId'] = snapshotId;
        return this;
    }
}