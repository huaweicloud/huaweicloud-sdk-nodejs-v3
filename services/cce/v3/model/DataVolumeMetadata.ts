

export class DataVolumeMetadata {
    private '__system__cmkid'?: string | undefined;
    private '__system__encrypted'?: string | undefined;
    public constructor() { 
    }
    public withSystemCmkid(systemCmkid: string): DataVolumeMetadata {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid() {
        return this['__system__cmkid'];
    }
    public withSystemEncrypted(systemEncrypted: string): DataVolumeMetadata {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted() {
        return this['__system__encrypted'];
    }
}