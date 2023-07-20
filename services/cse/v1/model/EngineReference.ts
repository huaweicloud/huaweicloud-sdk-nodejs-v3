

export class EngineReference {
    public vpc?: string;
    private 'az_list'?: Array<string>;
    private 'network_id'?: string;
    private 'subnet_cidr'?: string;
    private 'subnet_cidr_v6'?: string;
    private 'subnet_gateway'?: string;
    private 'public_ip_id'?: string;
    private 'service_limit'?: number;
    private 'instance_limit'?: number;
    public inputs?: { [key: string]: string; };
    public constructor() { 
    }
    public withVpc(vpc: string): EngineReference {
        this['vpc'] = vpc;
        return this;
    }
    public withAzList(azList: Array<string>): EngineReference {
        this['az_list'] = azList;
        return this;
    }
    public set azList(azList: Array<string>  | undefined) {
        this['az_list'] = azList;
    }
    public get azList(): Array<string> | undefined {
        return this['az_list'];
    }
    public withNetworkId(networkId: string): EngineReference {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withSubnetCidr(subnetCidr: string): EngineReference {
        this['subnet_cidr'] = subnetCidr;
        return this;
    }
    public set subnetCidr(subnetCidr: string  | undefined) {
        this['subnet_cidr'] = subnetCidr;
    }
    public get subnetCidr(): string | undefined {
        return this['subnet_cidr'];
    }
    public withSubnetCidrV6(subnetCidrV6: string): EngineReference {
        this['subnet_cidr_v6'] = subnetCidrV6;
        return this;
    }
    public set subnetCidrV6(subnetCidrV6: string  | undefined) {
        this['subnet_cidr_v6'] = subnetCidrV6;
    }
    public get subnetCidrV6(): string | undefined {
        return this['subnet_cidr_v6'];
    }
    public withSubnetGateway(subnetGateway: string): EngineReference {
        this['subnet_gateway'] = subnetGateway;
        return this;
    }
    public set subnetGateway(subnetGateway: string  | undefined) {
        this['subnet_gateway'] = subnetGateway;
    }
    public get subnetGateway(): string | undefined {
        return this['subnet_gateway'];
    }
    public withPublicIpId(publicIpId: string): EngineReference {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withServiceLimit(serviceLimit: number): EngineReference {
        this['service_limit'] = serviceLimit;
        return this;
    }
    public set serviceLimit(serviceLimit: number  | undefined) {
        this['service_limit'] = serviceLimit;
    }
    public get serviceLimit(): number | undefined {
        return this['service_limit'];
    }
    public withInstanceLimit(instanceLimit: number): EngineReference {
        this['instance_limit'] = instanceLimit;
        return this;
    }
    public set instanceLimit(instanceLimit: number  | undefined) {
        this['instance_limit'] = instanceLimit;
    }
    public get instanceLimit(): number | undefined {
        return this['instance_limit'];
    }
    public withInputs(inputs: { [key: string]: string; }): EngineReference {
        this['inputs'] = inputs;
        return this;
    }
}