

export class ListBandwidthRequest {
    public limit?: string;
    public marker?: string;
    public id?: string;
    public fields?: Array<string>;
    private 'bandwidth_type'?: string;
    public name?: string;
    private 'name_like'?: string;
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
    public withLimit(limit: string): ListBandwidthRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBandwidthRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListBandwidthRequest {
        this['id'] = id;
        return this;
    }
    public withFields(fields: Array<string>): ListBandwidthRequest {
        this['fields'] = fields;
        return this;
    }
    public withBandwidthType(bandwidthType: string): ListBandwidthRequest {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string  | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType(): string | undefined {
        return this['bandwidth_type'];
    }
    public withName(name: string): ListBandwidthRequest {
        this['name'] = name;
        return this;
    }
    public withNameLike(nameLike: string): ListBandwidthRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withIngressSize(ingressSize: string): ListBandwidthRequest {
        this['ingress_size'] = ingressSize;
        return this;
    }
    public set ingressSize(ingressSize: string  | undefined) {
        this['ingress_size'] = ingressSize;
    }
    public get ingressSize(): string | undefined {
        return this['ingress_size'];
    }
    public withAdminState(adminState: string): ListBandwidthRequest {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: string  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): string | undefined {
        return this['admin_state'];
    }
    public withBillingInfo(billingInfo: string): ListBandwidthRequest {
        this['billing_info'] = billingInfo;
        return this;
    }
    public set billingInfo(billingInfo: string  | undefined) {
        this['billing_info'] = billingInfo;
    }
    public get billingInfo(): string | undefined {
        return this['billing_info'];
    }
    public withTags(tags: string): ListBandwidthRequest {
        this['tags'] = tags;
        return this;
    }
    public withEnableBandwidthRules(enableBandwidthRules: string): ListBandwidthRequest {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
        return this;
    }
    public set enableBandwidthRules(enableBandwidthRules: string  | undefined) {
        this['enable_bandwidth_rules'] = enableBandwidthRules;
    }
    public get enableBandwidthRules(): string | undefined {
        return this['enable_bandwidth_rules'];
    }
    public withRuleQuota(ruleQuota: number): ListBandwidthRequest {
        this['rule_quota'] = ruleQuota;
        return this;
    }
    public set ruleQuota(ruleQuota: number  | undefined) {
        this['rule_quota'] = ruleQuota;
    }
    public get ruleQuota(): number | undefined {
        return this['rule_quota'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListBandwidthRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withChargeMode(chargeMode: string): ListBandwidthRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withSize(size: string): ListBandwidthRequest {
        this['size'] = size;
        return this;
    }
    public withType(type: string): ListBandwidthRequest {
        this['type'] = type;
        return this;
    }
}