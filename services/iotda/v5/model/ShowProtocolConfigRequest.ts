

export class ShowProtocolConfigRequest {
    private 'Instance-Id'?: string;
    private 'protocol_id'?: string;
    public constructor(protocolId?: string) { 
        this['protocol_id'] = protocolId;
    }
    public withInstanceId(instanceId: string): ShowProtocolConfigRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withProtocolId(protocolId: string): ShowProtocolConfigRequest {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string  | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId(): string | undefined {
        return this['protocol_id'];
    }
}