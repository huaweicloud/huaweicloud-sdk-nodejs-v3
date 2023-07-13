

export class ReinstallSeverMetadata {
    private '__system__encrypted'?: string | undefined;
    private '__system__cmkid'?: string | undefined;
    private 'user_data'?: string | undefined;
    public constructor() { 
    }
    public withSystemEncrypted(systemEncrypted: string): ReinstallSeverMetadata {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted() {
        return this['__system__encrypted'];
    }
    public withSystemCmkid(systemCmkid: string): ReinstallSeverMetadata {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid() {
        return this['__system__cmkid'];
    }
    public withUserData(userData: string): ReinstallSeverMetadata {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
}