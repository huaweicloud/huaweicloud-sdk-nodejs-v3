

export class CreateL7ruleReq {
    private 'tenant_id'?: string | undefined;
    private 'admin_state_up'?: boolean | undefined;
    public type: CreateL7ruleReqTypeEnum;
    private 'compare_type': string | undefined;
    public key?: string;
    public value: string;
    public invert?: boolean;
    public constructor(type?: any, compareType?: any, value?: any) { 
        this['type'] = type;
        this['compare_type'] = compareType;
        this['value'] = value;
    }
    public withTenantId(tenantId: string): CreateL7ruleReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): CreateL7ruleReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withType(type: CreateL7ruleReqTypeEnum): CreateL7ruleReq {
        this['type'] = type;
        return this;
    }
    public withCompareType(compareType: string): CreateL7ruleReq {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withKey(key: string): CreateL7ruleReq {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateL7ruleReq {
        this['value'] = value;
        return this;
    }
    public withInvert(invert: boolean): CreateL7ruleReq {
        this['invert'] = invert;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateL7ruleReqTypeEnum {
    HOST_NAME = 'HOST_NAME',
    PATH = 'PATH'
}
