

export class BatchCreateMembersOption {
    public name?: string;
    private 'availability_zone'?: string;
    public address?: string;
    private 'protocol_port'?: number;
    private 'subnet_cidr_id'?: string;
    public weight?: number;
    public constructor(address?: string, protocolPort?: number) { 
        this['address'] = address;
        this['protocol_port'] = protocolPort;
    }
    public withName(name: string): BatchCreateMembersOption {
        this['name'] = name;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): BatchCreateMembersOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withAddress(address: string): BatchCreateMembersOption {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: number): BatchCreateMembersOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withSubnetCidrId(subnetCidrId: string): BatchCreateMembersOption {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string  | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId(): string | undefined {
        return this['subnet_cidr_id'];
    }
    public withWeight(weight: number): BatchCreateMembersOption {
        this['weight'] = weight;
        return this;
    }
}