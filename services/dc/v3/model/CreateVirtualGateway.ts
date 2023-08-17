import { Tag } from './Tag';


export class CreateVirtualGateway {
    private 'vpc_id'?: string;
    public name?: string;
    public description?: string;
    private 'local_ep_group'?: Array<string>;
    private 'local_ep_group_ipv6'?: Array<string>;
    private 'bgp_asn'?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor(vpcId?: string, localEpGroup?: Array<string>) { 
        this['vpc_id'] = vpcId;
        this['local_ep_group'] = localEpGroup;
    }
    public withVpcId(vpcId: string): CreateVirtualGateway {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withName(name: string): CreateVirtualGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVirtualGateway {
        this['description'] = description;
        return this;
    }
    public withLocalEpGroup(localEpGroup: Array<string>): CreateVirtualGateway {
        this['local_ep_group'] = localEpGroup;
        return this;
    }
    public set localEpGroup(localEpGroup: Array<string>  | undefined) {
        this['local_ep_group'] = localEpGroup;
    }
    public get localEpGroup(): Array<string> | undefined {
        return this['local_ep_group'];
    }
    public withLocalEpGroupIpv6(localEpGroupIpv6: Array<string>): CreateVirtualGateway {
        this['local_ep_group_ipv6'] = localEpGroupIpv6;
        return this;
    }
    public set localEpGroupIpv6(localEpGroupIpv6: Array<string>  | undefined) {
        this['local_ep_group_ipv6'] = localEpGroupIpv6;
    }
    public get localEpGroupIpv6(): Array<string> | undefined {
        return this['local_ep_group_ipv6'];
    }
    public withBgpAsn(bgpAsn: number): CreateVirtualGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateVirtualGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateVirtualGateway {
        this['tags'] = tags;
        return this;
    }
}