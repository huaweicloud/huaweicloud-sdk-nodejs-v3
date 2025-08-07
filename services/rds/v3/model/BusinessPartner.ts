

export class BusinessPartner {
    private 'bp_domain_id'?: string;
    private 'bp_name'?: string;
    public order?: number;
    public international?: boolean;
    public constructor() { 
    }
    public withBpDomainId(bpDomainId: string): BusinessPartner {
        this['bp_domain_id'] = bpDomainId;
        return this;
    }
    public set bpDomainId(bpDomainId: string  | undefined) {
        this['bp_domain_id'] = bpDomainId;
    }
    public get bpDomainId(): string | undefined {
        return this['bp_domain_id'];
    }
    public withBpName(bpName: string): BusinessPartner {
        this['bp_name'] = bpName;
        return this;
    }
    public set bpName(bpName: string  | undefined) {
        this['bp_name'] = bpName;
    }
    public get bpName(): string | undefined {
        return this['bp_name'];
    }
    public withOrder(order: number): BusinessPartner {
        this['order'] = order;
        return this;
    }
    public withInternational(international: boolean): BusinessPartner {
        this['international'] = international;
        return this;
    }
}