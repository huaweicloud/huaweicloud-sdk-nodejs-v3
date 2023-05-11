

export class TenantBasic {
    private 'customer_id'?: string | undefined;
    private 'customer_name'?: string | undefined;
    private 'enterprise_name'?: string | undefined;
    public constructor() { 
    }
    public withCustomerId(customerId: string): TenantBasic {
        this['customer_id'] = customerId;
        return this;
    }
    public set customerId(customerId: string | undefined) {
        this['customer_id'] = customerId;
    }
    public get customerId() {
        return this['customer_id'];
    }
    public withCustomerName(customerName: string): TenantBasic {
        this['customer_name'] = customerName;
        return this;
    }
    public set customerName(customerName: string | undefined) {
        this['customer_name'] = customerName;
    }
    public get customerName() {
        return this['customer_name'];
    }
    public withEnterpriseName(enterpriseName: string): TenantBasic {
        this['enterprise_name'] = enterpriseName;
        return this;
    }
    public set enterpriseName(enterpriseName: string | undefined) {
        this['enterprise_name'] = enterpriseName;
    }
    public get enterpriseName() {
        return this['enterprise_name'];
    }
}