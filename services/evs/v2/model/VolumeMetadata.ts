

export class VolumeMetadata {
    private '__system__cmkid'?: string;
    private '__system__encrypted'?: string;
    private 'hw:passthrough'?: string;
    public orderID?: string;
    public constructor() { 
    }
    public withSystemCmkid(systemCmkid: string): VolumeMetadata {
        this['__system__cmkid'] = systemCmkid;
        return this;
    }
    public set systemCmkid(systemCmkid: string  | undefined) {
        this['__system__cmkid'] = systemCmkid;
    }
    public get systemCmkid(): string | undefined {
        return this['__system__cmkid'];
    }
    public withSystemEncrypted(systemEncrypted: string): VolumeMetadata {
        this['__system__encrypted'] = systemEncrypted;
        return this;
    }
    public set systemEncrypted(systemEncrypted: string  | undefined) {
        this['__system__encrypted'] = systemEncrypted;
    }
    public get systemEncrypted(): string | undefined {
        return this['__system__encrypted'];
    }
    public withHwPassthrough(hwPassthrough: string): VolumeMetadata {
        this['hw:passthrough'] = hwPassthrough;
        return this;
    }
    public set hwPassthrough(hwPassthrough: string  | undefined) {
        this['hw:passthrough'] = hwPassthrough;
    }
    public get hwPassthrough(): string | undefined {
        return this['hw:passthrough'];
    }
    public withOrderID(orderID: string): VolumeMetadata {
        this['orderID'] = orderID;
        return this;
    }
}