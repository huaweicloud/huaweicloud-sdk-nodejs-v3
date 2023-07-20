

export class BatchDeleteMembersOption {
    public id?: string;
    public address?: string;
    private 'protocol_port'?: number;
    public constructor() { 
    }
    public withId(id: string): BatchDeleteMembersOption {
        this['id'] = id;
        return this;
    }
    public withAddress(address: string): BatchDeleteMembersOption {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: number): BatchDeleteMembersOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
}