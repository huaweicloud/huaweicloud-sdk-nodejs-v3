

export class ListL7policiesRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    public name?: string;
    public description?: string;
    private 'admin_state_up'?: boolean | undefined;
    private 'listener_id'?: string | undefined;
    public action?: string;
    private 'redirect_pool_id'?: string | undefined;
    private 'redirect_listener_id'?: string | undefined;
    private 'redirect_url'?: string | undefined;
    public position?: number;
    private 'provisioning_status'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'display_all_rules'?: boolean | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListL7policiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListL7policiesRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListL7policiesRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: string): ListL7policiesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListL7policiesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListL7policiesRequest {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListL7policiesRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withListenerId(listenerId: string): ListL7policiesRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withAction(action: string): ListL7policiesRequest {
        this['action'] = action;
        return this;
    }
    public withRedirectPoolId(redirectPoolId: string): ListL7policiesRequest {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId() {
        return this['redirect_pool_id'];
    }
    public withRedirectListenerId(redirectListenerId: string): ListL7policiesRequest {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId() {
        return this['redirect_listener_id'];
    }
    public withRedirectUrl(redirectUrl: string): ListL7policiesRequest {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl() {
        return this['redirect_url'];
    }
    public withPosition(position: number): ListL7policiesRequest {
        this['position'] = position;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): ListL7policiesRequest {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus() {
        return this['provisioning_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListL7policiesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withDisplayAllRules(displayAllRules: boolean): ListL7policiesRequest {
        this['display_all_rules'] = displayAllRules;
        return this;
    }
    public set displayAllRules(displayAllRules: boolean | undefined) {
        this['display_all_rules'] = displayAllRules;
    }
    public get displayAllRules() {
        return this['display_all_rules'];
    }
}