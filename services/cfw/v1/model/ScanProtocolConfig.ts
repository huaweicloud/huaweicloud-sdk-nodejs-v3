

export class ScanProtocolConfig {
    public action?: number;
    private 'protocol_type'?: number;
    public constructor() { 
    }
    public withAction(action: number): ScanProtocolConfig {
        this['action'] = action;
        return this;
    }
    public withProtocolType(protocolType: number): ScanProtocolConfig {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: number  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): number | undefined {
        return this['protocol_type'];
    }
}