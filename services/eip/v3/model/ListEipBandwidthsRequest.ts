

export class ListEipBandwidthsRequest {
    public limit?: string;
    public marker?: string;
    public fields?: Array<string>;
    public id?: string;
    private 'bandwidth_type'?: string;
    public name?: string;
    private 'name_like'?: string;
    private 'tenant_id'?: string;
    private 'ingress_size'?: string;
    private 'admin_state'?: string;
    private 'billing_info'?: string;
    public tags?: string;
    private 'enable_bandwidth_rules'?: string;
    private 'rule_quota'?: number;
    private 'public_border_group'?: string;
    private 'charge_mode'?: string;
    public size?: string;
    public type?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListEipBandwidthsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListEipBandwidthsRequest {
        this['marker'] = marker;
        return this;
    }
    public withFields(fields: Array<string>): ListEipBandwidthsRequest {
        this['fields'] = fields;
        return this;
    }
    public withId(id: string): ListEipBandwidthsRequest {
        this['id'] = id;
        return this;
    }
    public withBandwidthType(bandwidthType: string): ListEipBandwidthsRequest {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
        return this['bandwidth_type'];
    }
    public withName(name: string): ListEipBandwidthsRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): ListEipBandwidthsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withTenantId(tenantId: string): ListEipBandwidthsRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withIngressSize(ingressSize: string): ListEipBandwidthsRequest {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: string  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): string | undefined {
        return this['ingress_size'];
    }
    public withAdminState(adminState: string): ListEipBandwidthsRequest {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: string  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): string | undefined {
        return this['admin_state'];
    }
    public withBillingInfo(billingInfo: string): ListEipBandwidthsRequest {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withTags(tags: string): ListEipBandwidthsRequest {
        this['tags'] = tags;
        return this;
    }
    public withEnableBandwidthRules(enableBandwidthRules: string): ListEipBandwidthsRequest {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
        return this;
    }
    public set enableBandwidthRules(enableBandwidthRules: string  | undefined) {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
    }
    public get enableBandwidthRules(): string | undefined {
        return this['enable_bandwidth_rules'];
    }
    public withRuleQuota(ruleQuota: number): ListEipBandwidthsRequest {
        this['rule_quota'] = ruleQuota;
        return this;
    }
    public set ruleQuota(ruleQuota: number  | undefined) {
        this['rule_quota'] = ruleQuota;
    }
    public get ruleQuota(): number | undefined {
        return this['rule_quota'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListEipBandwidthsRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withChargeMode(chargeMode: string): ListEipBandwidthsRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withSize(size: string): ListEipBandwidthsRequest {
        this['size'] = size;
        return this;
    }
    public withType(type: string): ListEipBandwidthsRequest {
        this['type'] = type;
        return this;
    }
}