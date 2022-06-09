

export class BatchCreateMembersOption {
    public name?: string;
    public address: string;
    private 'protocol_port': number | undefined;
    private 'subnet_cidr_id'?: string | undefined;
    public weight?: number;
    public constructor(address?: any, protocolPort?: any) { 
        this['address'] = address;
        this['protocol_port'] = protocolPort;
    }
    public withName(name: string): BatchCreateMembersOption {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): BatchCreateMembersOption {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: number): BatchCreateMembersOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withSubnetCidrId(subnetCidrId: string): BatchCreateMembersOption {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId() {
        return this['subnet_cidr_id'];
    }
    public withWeight(weight: number): BatchCreateMembersOption {
        this['weight'] = weight;
        return this;
    }
}