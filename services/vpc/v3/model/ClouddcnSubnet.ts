import { TagEntity } from './TagEntity';


export class ClouddcnSubnet {
    public id?: string;
    private 'project_id'?: string;
    public name?: string;
    public description?: string;
    public cidr?: string;
    private 'gateway_ip'?: string;
    private 'dns_nameservers'?: Array<string>;
    private 'vpc_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'availability_zone'?: string;
    public tags?: Array<TagEntity>;
    private 'enterprise_project_id'?: string;
    public constructor(id?: string, projectId?: string, name?: string, description?: string, cidr?: string, gatewayIp?: string, dnsNameservers?: Array<string>, vpcId?: string, createdAt?: Date, updatedAt?: Date, availabilityZone?: string, tags?: Array<TagEntity>, enterpriseProjectId?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['name'] = name;
        this['description'] = description;
        this['cidr'] = cidr;
        this['gateway_ip'] = gatewayIp;
        this['dns_nameservers'] = dnsNameservers;
        this['vpc_id'] = vpcId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['availability_zone'] = availabilityZone;
        this['tags'] = tags;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): ClouddcnSubnet {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ClouddcnSubnet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): ClouddcnSubnet {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ClouddcnSubnet {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): ClouddcnSubnet {
        this['cidr'] = cidr;
        return this;
    }
    public withGatewayIp(gatewayIp: string): ClouddcnSubnet {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withDnsNameservers(dnsNameservers: Array<string>): ClouddcnSubnet {
        this['dns_nameservers'] = dnsNameservers;
        return this;
    }
    public set dnsNameservers(dnsNameservers: Array<string>  | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers(): Array<string> | undefined {
        return this['dns_nameservers'];
    }
    public withVpcId(vpcId: string): ClouddcnSubnet {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCreatedAt(createdAt: Date): ClouddcnSubnet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ClouddcnSubnet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withAvailabilityZone(availabilityZone: string): ClouddcnSubnet {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withTags(tags: Array<TagEntity>): ClouddcnSubnet {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ClouddcnSubnet {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}