

export class SfsTurboConnectionStatus {
    public name?: string;
    public sfsId?: string;
    public connectionType?: string;
    public ipAddr?: string;
    public status?: string;
    public constructor(name?: string, sfsId?: string, connectionType?: string) { 
        this['name'] = name;
        this['sfsId'] = sfsId;
        this['connectionType'] = connectionType;
    }
    public withName(name: string): SfsTurboConnectionStatus {
        this['name'] = name;
        return this;
    }
    public withSfsId(sfsId: string): SfsTurboConnectionStatus {
        this['sfsId'] = sfsId;
        return this;
    }
    public withConnectionType(connectionType: string): SfsTurboConnectionStatus {
        this['connectionType'] = connectionType;
        return this;
    }
    public withIpAddr(ipAddr: string): SfsTurboConnectionStatus {
        this['ipAddr'] = ipAddr;
        return this;
    }
    public withStatus(status: string): SfsTurboConnectionStatus {
        this['status'] = status;
        return this;
    }
}