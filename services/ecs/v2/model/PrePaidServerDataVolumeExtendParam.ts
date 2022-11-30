

export class PrePaidServerDataVolumeExtendParam {
    public resourceSpecCode?: string;
    public resourceType?: string;
    public snapshotId?: string;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): PrePaidServerDataVolumeExtendParam {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withResourceType(resourceType: string): PrePaidServerDataVolumeExtendParam {
        this['resourceType'] = resourceType;
        return this;
    }
    public withSnapshotId(snapshotId: string): PrePaidServerDataVolumeExtendParam {
        this['snapshotId'] = snapshotId;
        return this;
    }
}