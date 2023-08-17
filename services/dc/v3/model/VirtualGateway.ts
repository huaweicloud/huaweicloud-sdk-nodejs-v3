import { Tag } from './Tag';


export class VirtualGateway {
    public id?: string;
    private 'vpc_id'?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    public type?: VirtualGatewayTypeEnum | string;
    private 'local_ep_group'?: Array<string>;
    private 'local_ep_group_ipv6'?: Array<string>;
    private 'admin_state_up'?: boolean;
    public status?: string;
    private 'bgp_asn'?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withId(id: string): VirtualGateway {
        this['id'] = id;
        return this;
    }
    public withVpcId(vpcId: string): VirtualGateway {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withTenantId(tenantId: string): VirtualGateway {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): VirtualGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): VirtualGateway {
        this['description'] = description;
        return this;
    }
    public withType(type: VirtualGatewayTypeEnum | string): VirtualGateway {
        this['type'] = type;
        return this;
    }
    public withLocalEpGroup(localEpGroup: Array<string>): VirtualGateway {
        this['local_ep_group'] = localEpGroup;
        return this;
    }
    public set localEpGroup(localEpGroup: Array<string>  | undefined) {
        this['local_ep_group'] = localEpGroup;
    }
    public get localEpGroup(): Array<string> | undefined {
        return this['local_ep_group'];
    }
    public withLocalEpGroupIpv6(localEpGroupIpv6: Array<string>): VirtualGateway {
        this['local_ep_group_ipv6'] = localEpGroupIpv6;
        return this;
    }
    public set localEpGroupIpv6(localEpGroupIpv6: Array<string>  | undefined) {
        this['local_ep_group_ipv6'] = localEpGroupIpv6;
    }
    public get localEpGroupIpv6(): Array<string> | undefined {
        return this['local_ep_group_ipv6'];
    }
    public withAdminStateUp(adminStateUp: boolean): VirtualGateway {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withStatus(status: string): VirtualGateway {
        this['status'] = status;
        return this;
    }
    public withBgpAsn(bgpAsn: number): VirtualGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VirtualGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): VirtualGateway {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VirtualGatewayTypeEnum {
    DEFAULT = 'default'
}
