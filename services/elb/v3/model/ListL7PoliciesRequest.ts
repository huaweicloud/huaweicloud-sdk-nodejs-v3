

export class ListL7PoliciesRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean | undefined;
    private 'enterprise_project_id'?: Array<string> | undefined;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'admin_state_up'?: boolean | undefined;
    private 'listener_id'?: Array<string> | undefined;
    public position?: Array<number>;
    public action?: Array<string>;
    private 'redirect_url'?: Array<string> | undefined;
    private 'redirect_pool_id'?: Array<string> | undefined;
    private 'redirect_listener_id'?: Array<string> | undefined;
    private 'provisioning_status'?: Array<string> | undefined;
    private 'display_all_rules'?: boolean | undefined;
    public priority?: Array<number>;
    public constructor() { 
    }
    public withMarker(marker: string): ListL7PoliciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListL7PoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListL7PoliciesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListL7PoliciesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string> | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withId(id: Array<string>): ListL7PoliciesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListL7PoliciesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListL7PoliciesRequest {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListL7PoliciesRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withListenerId(listenerId: Array<string>): ListL7PoliciesRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: Array<string> | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withPosition(position: Array<number>): ListL7PoliciesRequest {
        this['position'] = position;
        return this;
    }
    public withAction(action: Array<string>): ListL7PoliciesRequest {
        this['action'] = action;
        return this;
    }
    public withRedirectUrl(redirectUrl: Array<string>): ListL7PoliciesRequest {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: Array<string> | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl() {
        return this['redirect_url'];
    }
    public withRedirectPoolId(redirectPoolId: Array<string>): ListL7PoliciesRequest {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: Array<string> | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId() {
        return this['redirect_pool_id'];
    }
    public withRedirectListenerId(redirectListenerId: Array<string>): ListL7PoliciesRequest {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: Array<string> | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId() {
        return this['redirect_listener_id'];
    }
    public withProvisioningStatus(provisioningStatus: Array<string>): ListL7PoliciesRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: Array<string> | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withDisplayAllRules(displayAllRules: boolean): ListL7PoliciesRequest {
        this['display_all_rules'] = displayAllRules;
        return this;
    }
    public set displayAllRules(displayAllRules: boolean | undefined) {
        this['display_all_rules'] = displayAllRules;
    }
    public get displayAllRules() {
        return this['display_all_rules'];
    }
    public withPriority(priority: Array<number>): ListL7PoliciesRequest {
        this['priority'] = priority;
        return this;
    }
}