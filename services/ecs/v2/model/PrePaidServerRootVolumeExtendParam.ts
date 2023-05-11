

export class PrePaidServerRootVolumeExtendParam {
    private '__system__encrypted'?: string | undefined;
    private '__system__cmkid'?: string | undefined;
    public resourceSpecCode?: string;
    public resourceType?: string;
    public snapshotId?: string;
    public constructor() { 
    }
    public withSystemEncrypted(systemEncrypted: string): PrePaidServerRootVolumeExtendParam {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted() {
        return this['__system__encrypted'];
    }
    public withSystemCmkid(systemCmkid: string): PrePaidServerRootVolumeExtendParam {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid() {
        return this['__system__cmkid'];
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