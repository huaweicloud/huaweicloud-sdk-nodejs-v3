

export class MetadataInstall {
    private 'user_data'?: string;
    private '__system__encrypted'?: string;
    private '__system__cmkid'?: string;
    public constructor() { 
    }
    public withUserData(userData: string): MetadataInstall {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withSystemEncrypted(systemEncrypted: string): MetadataInstall {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string  | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted(): string | undefined {
        return this['__system__encrypted'];
    }
    public withSystemCmkid(systemCmkid: string): MetadataInstall {
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