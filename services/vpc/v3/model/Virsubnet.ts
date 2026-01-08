import { ResponseTag } from './ResponseTag';
import { SubnetCidr } from './SubnetCidr';
import { SubnetExtraDhcpOpt } from './SubnetExtraDhcpOpt';


export class Virsubnet {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'dns_nameservers'?: Array<string>;
    private 'zone_id'?: string;
    private 'vpc_id'?: string;
    public status?: string;
    private 'project_id'?: string;
    public scope?: string;
    private 'subnet_cidrs'?: Array<SubnetCidr>;
    public tags?: Array<ResponseTag>;
    private 'extra_dhcp_opts'?: Array<SubnetExtraDhcpOpt>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, name?: string, description?: string, dnsNameservers?: Array<string>, zoneId?: string, vpcId?: string, status?: string, projectId?: string, scope?: string, subnetCidrs?: Array<SubnetCidr>, tags?: Array<ResponseTag>, extraDhcpOpts?: Array<SubnetExtraDhcpOpt>, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['dns_nameservers'] = dnsNameservers;
        this['zone_id'] = zoneId;
        this['vpc_id'] = vpcId;
        this['status'] = status;
        this['project_id'] = projectId;
        this['scope'] = scope;
        this['subnet_cidrs'] = subnetCidrs;
        this['tags'] = tags;
        this['extra_dhcp_opts'] = extraDhcpOpts;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): Virsubnet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Virsubnet {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Virsubnet {
        this['description'] = description;
        return this;
    }
    public withDnsNameservers(dnsNameservers: Array<string>): Virsubnet {
        this['dns_nameservers'] = dnsNameservers;
        return this;
    }
    public set dnsNameservers(dnsNameservers: Array<string>  | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers(): Array<string> | undefined {
        return this['dns_nameservers'];
    }
    public withZoneId(zoneId: string): Virsubnet {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withVpcId(vpcId: string): Virsubnet {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withStatus(status: string): Virsubnet {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): Virsubnet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withScope(scope: string): Virsubnet {
        this['scope'] = scope;
        return this;
    }
    public withSubnetCidrs(subnetCidrs: Array<SubnetCidr>): Virsubnet {
        this['subnet_cidrs'] = subnetCidrs;
        return this;
    }
    public set subnetCidrs(subnetCidrs: Array<SubnetCidr>  | undefined) {
        this['subnet_cidrs'] = subnetCidrs;
    }
    public get subnetCidrs(): Array<SubnetCidr> | undefined {
        return this['subnet_cidrs'];
    }
    public withTags(tags: Array<ResponseTag>): Virsubnet {
        this['tags'] = tags;
        return this;
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<SubnetExtraDhcpOpt>): Virsubnet {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<SubnetExtraDhcpOpt>  | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts(): Array<SubnetExtraDhcpOpt> | undefined {
        return this['extra_dhcp_opts'];
    }
    public withCreatedAt(createdAt: Date): Virsubnet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Virsubnet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}