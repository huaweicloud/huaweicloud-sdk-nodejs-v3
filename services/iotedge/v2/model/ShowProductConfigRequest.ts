

export class ShowProductConfigRequest {
    private 'protocol_type'?: string;
    public constructor(protocolType?: string) { 
        this['protocol_type'] = protocolType;
    }
    public withProtocolType(protocolType: string): ShowProductConfigRequest {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
}