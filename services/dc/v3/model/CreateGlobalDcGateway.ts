import { Tag } from './Tag';


export class CreateGlobalDcGateway {
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'bgp_asn'?: number;
    private 'enterprise_project_id'?: string;
    private 'address_family'?: CreateGlobalDcGatewayAddressFamilyEnum | string;
    public tags?: Array<Tag>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withTenantId(tenantId: string): CreateGlobalDcGateway {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): CreateGlobalDcGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateGlobalDcGateway {
        this['description'] = description;
        return this;
    }
    public withBgpAsn(bgpAsn: number): CreateGlobalDcGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateGlobalDcGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAddressFamily(addressFamily: CreateGlobalDcGatewayAddressFamilyEnum | string): CreateGlobalDcGateway {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: CreateGlobalDcGatewayAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): CreateGlobalDcGatewayAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
    public withTags(tags: Array<Tag>): CreateGlobalDcGateway {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateGlobalDcGatewayAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
