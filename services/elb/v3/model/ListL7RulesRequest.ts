

export class ListL7RulesRequest {
    private 'l7policy_id': string | undefined;
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: Array<string>;
    private 'compare_type'?: Array<string> | undefined;
    private 'provisioning_status'?: Array<string> | undefined;
    public invert?: boolean;
    private 'admin_state_up'?: boolean | undefined;
    public value?: Array<string>;
    public key?: Array<string>;
    public type?: Array<string>;
    private 'enterprise_project_id'?: Array<string> | undefined;
    public constructor(l7policyId?: any) { 
        this['l7policy_id'] = l7policyId;
    }
    public withL7policyId(l7policyId: string): ListL7RulesRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId() {
        return this['l7policy_id'];
    }
    public withLimit(limit: number): ListL7RulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListL7RulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListL7RulesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListL7RulesRequest {
        this['id'] = id;
        return this;
    }
    public withCompareType(compareType: Array<string>): ListL7RulesRequest {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: Array<string> | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withProvisioningStatus(provisioningStatus: Array<string>): ListL7RulesRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: Array<string> | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withInvert(invert: boolean): ListL7RulesRequest {
        this['invert'] = invert;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListL7RulesRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withValue(value: Array<string>): ListL7RulesRequest {
        this['value'] = value;
        return this;
    }
    public withKey(key: Array<string>): ListL7RulesRequest {
        this['key'] = key;
        return this;
    }
    public withType(type: Array<string>): ListL7RulesRequest {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListL7RulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string> | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}