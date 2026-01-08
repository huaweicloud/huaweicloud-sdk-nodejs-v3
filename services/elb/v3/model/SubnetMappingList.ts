

export class SubnetMappingList {
    private 'subnet_cidr_id'?: string;
    private 'dst_subnet_cidr_id'?: string;
    public constructor(subnetCidrId?: string, dstSubnetCidrId?: string) { 
        this['subnet_cidr_id'] = subnetCidrId;
        this['dst_subnet_cidr_id'] = dstSubnetCidrId;
    }
    public withSubnetCidrId(subnetCidrId: string): SubnetMappingList {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string  | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId(): string | undefined {
        return this['subnet_cidr_id'];
    }
    public withDstSubnetCidrId(dstSubnetCidrId: string): SubnetMappingList {
        this['dst_subnet_cidr_id'] = dstSubnetCidrId;
        return this;
    }
    public set dstSubnetCidrId(dstSubnetCidrId: string  | undefined) {
        this['dst_subnet_cidr_id'] = dstSubnetCidrId;
    }
    public get dstSubnetCidrId(): string | undefined {
        return this['dst_subnet_cidr_id'];
    }
}