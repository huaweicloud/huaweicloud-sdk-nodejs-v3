

export class TenantBasic {
    private 'customer_id'?: string;
    private 'customer_name'?: string;
    private 'enterprise_name'?: string;
    public constructor() { 
    }
    public withCustomerId(customerId: string): TenantBasic {
        this['customer_id'] = customerId;
        return this;
    }
    public set customerId(customerId: string  | undefined) {
        this['customer_id'] = customerId;
    }
    public get customerId(): string | undefined {
        return this['customer_id'];
    }
    public withCustomerName(customerName: string): TenantBasic {
        this['customer_name'] = customerName;
        return this;
    }
    public set customerName(customerName: string  | undefined) {
        this['customer_name'] = customerName;
    }
    public get customerName(): string | undefined {
        return this['customer_name'];
    }
    public withEnterpriseName(enterpriseName: string): TenantBasic {
        this['enterprise_name'] = enterpriseName;
        return this;
    }
    public set enterpriseName(enterpriseName: string  | undefined) {
        this['enterprise_name'] = enterpriseName;
    }
    public get enterpriseName(): string | undefined {
        return this['enterprise_name'];
    }
}