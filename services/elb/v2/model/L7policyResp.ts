import { ResourceList } from './ResourceList';


export class L7policyResp {
    public id?: string;
    public name?: string;
    public rules?: Array<ResourceList>;
    public action?: L7policyRespActionEnum | string;
    private 'provisioning_status'?: string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'listener_id'?: string;
    private 'redirect_pool_id'?: string;
    private 'redirect_listener_id'?: string;
    private 'redirect_url'?: string;
    public position?: number;
    public constructor(id?: string, name?: string, rules?: Array<ResourceList>, action?: string, provisioningStatus?: string, tenantId?: string, projectId?: string, adminStateUp?: boolean, description?: string, listenerId?: string, redirectPoolId?: string, redirectListenerId?: string, redirectUrl?: string, position?: number) { 
        this['id'] = id;
        this['name'] = name;
        this['rules'] = rules;
        this['action'] = action;
        this['provisioning_status'] = provisioningStatus;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['admin_state_up'] = adminStateUp;
        this['description'] = description;
        this['listener_id'] = listenerId;
        this['redirect_pool_id'] = redirectPoolId;
        this['redirect_listener_id'] = redirectListenerId;
        this['redirect_url'] = redirectUrl;
        this['position'] = position;
    }
    public withId(id: string): L7policyResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): L7policyResp {
        this['name'] = name;
        return this;
    }
    public withRules(rules: Array<ResourceList>): L7policyResp {
        this['rules'] = rules;
        return this;
    }
    public withAction(action: L7policyRespActionEnum | string): L7policyResp {
        this['action'] = action;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): L7policyResp {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withTenantId(tenantId: string): L7policyResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): L7policyResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): L7policyResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDescription(description: string): L7policyResp {
        this['description'] = description;
        return this;
    }
    public withListenerId(listenerId: string): L7policyResp {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): L7policyResp {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string  | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId(): string | undefined {
        return this['redirect_pool_id'];
    }
    public withRedirectListenerId(redirectListenerId: string): L7policyResp {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string  | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId(): string | undefined {
        return this['redirect_listener_id'];
    }
    public withRedirectUrl(redirectUrl: string): L7policyResp {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
        return this['redirect_url'];
    }
    public withPosition(position: number): L7policyResp {
        this['position'] = position;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum L7policyRespActionEnum {
    REDIRECT_TO_POOL = 'REDIRECT_TO_POOL',
    REDIRECT_TO_LISTENER = 'REDIRECT_TO_LISTENER'
}
