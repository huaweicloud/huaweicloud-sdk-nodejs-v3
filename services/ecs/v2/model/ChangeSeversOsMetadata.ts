

export class ChangeSeversOsMetadata {
    private '__system__encrypted'?: string;
    private '__system__cmkid'?: string;
    private 'user_data'?: string;
    private 'BYOL'?: string;
    public constructor() { 
    }
    public withSystemEncrypted(systemEncrypted: string): ChangeSeversOsMetadata {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string  | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted(): string | undefined {
        return this['__system__encrypted'];
    }
    public withSystemCmkid(systemCmkid: string): ChangeSeversOsMetadata {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string  | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid(): string | undefined {
        return this['__system__cmkid'];
    }
    public withUserData(userData: string): ChangeSeversOsMetadata {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withByol(byol: string): ChangeSeversOsMetadata {
        this['BYOL'] = byol;
        return this;
    }
    public set byol(byol: string  | undefined) {
        this['BYOL'] = byol;
    }
    public get byol(): string | undefined {
        return this['BYOL'];
    }
}