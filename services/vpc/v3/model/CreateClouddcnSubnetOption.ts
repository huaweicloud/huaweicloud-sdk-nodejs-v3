import { TagEntity } from './TagEntity';


export class CreateClouddcnSubnetOption {
    public name?: string;
    public description?: string;
    public cidr?: string;
    private 'vpc_id'?: string;
    private 'gateway_ip'?: string;
    private 'dns_nameservers'?: Array<string>;
    private 'availability_zone'?: string;
    public tags?: Array<TagEntity>;
    public constructor(name?: string, cidr?: string, vpcId?: string, gatewayIp?: string) { 
        this['name'] = name;
        this['cidr'] = cidr;
        this['vpc_id'] = vpcId;
        this['gateway_ip'] = gatewayIp;
    }
    public withName(name: string): CreateClouddcnSubnetOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateClouddcnSubnetOption {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): CreateClouddcnSubnetOption {
        this['cidr'] = cidr;
        return this;
    }
    public withVpcId(vpcId: string): CreateClouddcnSubnetOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withGatewayIp(gatewayIp: string): CreateClouddcnSubnetOption {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withDnsNameservers(dnsNameservers: Array<string>): CreateClouddcnSubnetOption {
        this['dns_nameservers'] = dnsNameservers;
        return this;
    }
    public set dnsNameservers(dnsNameservers: Array<string>  | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers(): Array<string> | undefined {
        return this['dns_nameservers'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateClouddcnSubnetOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withTags(tags: Array<TagEntity>): CreateClouddcnSubnetOption {
        this['tags'] = tags;
        return this;
    }
}