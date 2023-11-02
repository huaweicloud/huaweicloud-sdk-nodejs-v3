import { SessionConfiguration } from './SessionConfiguration';


export class NatGatewayResponseBody {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    public spec?: NatGatewayResponseBodySpecEnum | string;
    public status?: NatGatewayResponseBodyStatusEnum | string;
    private 'admin_state_up'?: boolean;
    private 'created_at'?: string;
    private 'router_id'?: string;
    private 'internal_network_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'session_conf'?: SessionConfiguration;
    private 'ngport_ip_address'?: string;
    private 'billing_info'?: string;
    private 'dnat_rules_limit'?: number;
    private 'snat_rule_public_ip_limit'?: number;
    public constructor(id?: string, tenantId?: string, name?: string, description?: string, spec?: string, status?: string, adminStateUp?: boolean, createdAt?: string, routerId?: string, internalNetworkId?: string, enterpriseProjectId?: string, sessionConf?: SessionConfiguration, ngportIpAddress?: string, billingInfo?: string, dnatRulesLimit?: number, snatRulePublicIpLimit?: number) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['name'] = name;
        this['description'] = description;
        this['spec'] = spec;
        this['status'] = status;
        this['admin_state_up'] = adminStateUp;
        this['created_at'] = createdAt;
        this['router_id'] = routerId;
        this['internal_network_id'] = internalNetworkId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['session_conf'] = sessionConf;
        this['ngport_ip_address'] = ngportIpAddress;
        this['billing_info'] = billingInfo;
        this['dnat_rules_limit'] = dnatRulesLimit;
        this['snat_rule_public_ip_limit'] = snatRulePublicIpLimit;
    }
    public withId(id: string): NatGatewayResponseBody {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): NatGatewayResponseBody {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): NatGatewayResponseBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NatGatewayResponseBody {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: NatGatewayResponseBodySpecEnum | string): NatGatewayResponseBody {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NatGatewayResponseBodyStatusEnum | string): NatGatewayResponseBody {
        this['status'] = status;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NatGatewayResponseBody {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withCreatedAt(createdAt: string): NatGatewayResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withRouterId(routerId: string): NatGatewayResponseBody {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withInternalNetworkId(internalNetworkId: string): NatGatewayResponseBody {
        this['internal_network_id'] = internalNetworkId;
        return this;
    }
    public set internalNetworkId(internalNetworkId: string  | undefined) {
        this['internal_network_id'] = internalNetworkId;
    }
    public get internalNetworkId(): string | undefined {
        return this['internal_network_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): NatGatewayResponseBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSessionConf(sessionConf: SessionConfiguration): NatGatewayResponseBody {
        this['session_conf'] = sessionConf;
        return this;
    }
    public set sessionConf(sessionConf: SessionConfiguration  | undefined) {
        this['session_conf'] = sessionConf;
    }
    public get sessionConf(): SessionConfiguration | undefined {
        return this['session_conf'];
    }
    public withNgportIpAddress(ngportIpAddress: string): NatGatewayResponseBody {
        this['ngport_ip_address'] = ngportIpAddress;
        return this;
    }
    public set ngportIpAddress(ngportIpAddress: string  | undefined) {
        this['ngport_ip_address'] = ngportIpAddress;
    }
    public get ngportIpAddress(): string | undefined {
        return this['ngport_ip_address'];
    }
    public withBillingInfo(billingInfo: string): NatGatewayResponseBody {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withDnatRulesLimit(dnatRulesLimit: number): NatGatewayResponseBody {
        this['dnat_rules_limit'] = dnatRulesLimit;
        return this;
    }
    public set dnatRulesLimit(dnatRulesLimit: number  | undefined) {
        this['dnat_rules_limit'] = dnatRulesLimit;
    }
    public get dnatRulesLimit(): number | undefined {
        return this['dnat_rules_limit'];
    }
    public withSnatRulePublicIpLimit(snatRulePublicIpLimit: number): NatGatewayResponseBody {
        this['snat_rule_public_ip_limit'] = snatRulePublicIpLimit;
        return this;
    }
    public set snatRulePublicIpLimit(snatRulePublicIpLimit: number  | undefined) {
        this['snat_rule_public_ip_limit'] = snatRulePublicIpLimit;
    }
    public get snatRulePublicIpLimit(): number | undefined {
        return this['snat_rule_public_ip_limit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NatGatewayResponseBodySpecEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4'
}
/**
    * @export
    * @enum {string}
    */
export enum NatGatewayResponseBodyStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    PENDING_DELETE = 'PENDING_DELETE',
    INACTIVE = 'INACTIVE'
}
