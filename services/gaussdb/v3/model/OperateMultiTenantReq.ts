

export class OperateMultiTenantReq {
    private 'multi_tenant_switch'?: boolean;
    public constructor(multiTenantSwitch?: boolean) { 
        this['multi_tenant_switch'] = multiTenantSwitch;
    }
    public withMultiTenantSwitch(multiTenantSwitch: boolean): OperateMultiTenantReq {
        this['multi_tenant_switch'] = multiTenantSwitch;
        return this;
    }
    public set multiTenantSwitch(multiTenantSwitch: boolean  | undefined) {
        this['multi_tenant_switch'] = multiTenantSwitch;
    }
    public get multiTenantSwitch(): boolean | undefined {
        return this['multi_tenant_switch'];
    }
}