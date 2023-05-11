

export class PostPaidServerRootVolumeExtendParam {
    private '__system__encrypted'?: string | undefined;
    private '__system__cmkid'?: string | undefined;
    public resourceSpecCode?: string;
    public resourceType?: string;
    public snapshotId?: string;
    public constructor() { 
    }
    public withSystemEncrypted(systemEncrypted: string): PostPaidServerRootVolumeExtendParam {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted() {
        return this['__system__encrypted'];
    }
    public withSystemCmkid(systemCmkid: string): PostPaidServerRootVolumeExtendParam {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid() {
        return this['__system__cmkid'];
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