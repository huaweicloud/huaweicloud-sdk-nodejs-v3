

export class DiskEncryptionInfo {
    public systemEncrypted?: string;
    public systemCmkid?: string;
    public constructor() { 
    }
    public withSystemEncrypted(systemEncrypted: string): DiskEncryptionInfo {
        this['systemEncrypted'] = systemEncrypted;
        return this;
    }
    public withSystemCmkid(systemCmkid: string): DiskEncryptionInfo {
        this['systemCmkid'] = systemCmkid;
        return this;
    }
}