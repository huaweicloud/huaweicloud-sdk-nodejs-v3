

export class L7ruleResp {
    public id: string;
    private 'provisioning_status': string | undefined;
    private 'tenant_id': string | undefined;
    private 'project_id': string | undefined;
    private 'admin_state_up': boolean | undefined;
    public type: L7ruleRespTypeEnum;
    private 'compare_type': string | undefined;
    public invert: boolean;
    public key: string;
    public value: string;
    public constructor(id?: any, provisioningStatus?: any, tenantId?: any, projectId?: any, adminStateUp?: any, type?: any, compareType?: any, invert?: any, key?: any, value?: any) { 
        this['id'] = id;
        this['provisioning_status'] = provisioningStatus;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['admin_state_up'] = adminStateUp;
        this['type'] = type;
        this['compare_type'] = compareType;
        this['invert'] = invert;
        this['key'] = key;
        this['value'] = value;
    }
    public withId(id: string): L7ruleResp {
        this['id'] = id;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): L7ruleResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withTenantId(tenantId: string): L7ruleResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): L7ruleResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): L7ruleResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withType(type: L7ruleRespTypeEnum): L7ruleResp {
        this['type'] = type;
        return this;
    }
    public withCompareType(compareType: string): L7ruleResp {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withInvert(invert: boolean): L7ruleResp {
        this['invert'] = invert;
        return this;
    }
    public withKey(key: string): L7ruleResp {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): L7ruleResp {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum L7ruleRespTypeEnum {
    HOST_NAME = 'HOST_NAME',
    PATH = 'PATH'
}
