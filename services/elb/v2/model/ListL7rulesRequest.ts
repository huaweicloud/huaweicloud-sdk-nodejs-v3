

export class ListL7rulesRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean;
    private 'l7policy_id'?: string;
    public id?: string;
    private 'admin_state_up'?: boolean;
    public type?: string;
    private 'compare_type'?: string;
    public invert?: boolean;
    public key?: string;
    public value?: string;
    private 'provisioning_status'?: string;
    public constructor(l7policyId?: string) { 
        this['l7policy_id'] = l7policyId;
    }
    public withLimit(limit: number): ListL7rulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListL7rulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListL7rulesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withL7policyId(l7policyId: string): ListL7rulesRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string  | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId(): string | undefined {
        return this['l7policy_id'];
    }
    public withId(id: string): ListL7rulesRequest {
        this['id'] = id;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListL7rulesRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withType(type: string): ListL7rulesRequest {
        this['type'] = type;
        return this;
    }
    public withCompareType(compareType: string): ListL7rulesRequest {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withInvert(invert: boolean): ListL7rulesRequest {
        this['invert'] = invert;
        return this;
    }
    public withKey(key: string): ListL7rulesRequest {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ListL7rulesRequest {
        this['value'] = value;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): ListL7rulesRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
}