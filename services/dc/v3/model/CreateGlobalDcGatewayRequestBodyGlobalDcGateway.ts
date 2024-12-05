import { CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags } from './CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags';


export class CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'bgp_asn'?: number;
    private 'enterprise_project_id'?: string;
    private 'address_family'?: CreateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string;
    public tags?: Array<CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withTenantId(tenantId: string): CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['description'] = description;
        return this;
    }
    public withBgpAsn(bgpAsn: number): CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAddressFamily(addressFamily: CreateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string): CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: CreateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): CreateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
    public withTags(tags: Array<CreateGlobalDcGatewayRequestBodyGlobalDcGatewayTags>): CreateGlobalDcGatewayRequestBodyGlobalDcGateway {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateGlobalDcGatewayRequestBodyGlobalDcGatewayAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
