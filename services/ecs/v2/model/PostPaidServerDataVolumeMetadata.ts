

export class PostPaidServerDataVolumeMetadata {
    private '__system__encrypted'?: string;
    private '__system__cmkid'?: string;
    public constructor() { 
    }
    public withSystemEncrypted(systemEncrypted: string): PostPaidServerDataVolumeMetadata {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string  | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted(): string | undefined {
        return this['__system__encrypted'];
    }
    public withSystemCmkid(systemCmkid: string): PostPaidServerDataVolumeMetadata {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string  | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid(): string | undefined {
        return this['__system__cmkid'];
    }
}