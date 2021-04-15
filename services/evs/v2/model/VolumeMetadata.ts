

export class VolumeMetadata {
    private '__system__cmkid'?: string | undefined;
    private '__system__encrypted'?: string | undefined;
    private 'full_clone'?: string | undefined;
    private 'hw:passthrough'?: string | undefined;
    public orderID?: string;
    public constructor() { 
    }
    public withSystemCmkid(systemCmkid: string): VolumeMetadata {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid() {
        return this['__system__cmkid'];
    }
    public withSystemEncrypted(systemEncrypted: string): VolumeMetadata {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted() {
        return this['__system__encrypted'];
    }
    public withFullClone(fullClone: string): VolumeMetadata {
        this['full_clone'] = fullClone;
        return this;
    }
    public set fullClone(fullClone: string | undefined) {
        this['full_clone'] = fullClone;
    }
    public get fullClone() {
        return this['full_clone'];
    }
    public withHwPassthrough(hwPassthrough: string): VolumeMetadata {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: string | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough() {
        return this['hw:passthrough'];
    }
    public withOrderID(orderID: string): VolumeMetadata {
        this['orderID'] = orderID;
        return this;
    }
}