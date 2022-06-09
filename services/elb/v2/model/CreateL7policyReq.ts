import { CreateL7ruleReqInPolicy } from './CreateL7ruleReqInPolicy';


export class CreateL7policyReq {
    public name?: string;
    public action: CreateL7policyReqActionEnum;
    private 'tenant_id'?: string | undefined;
    private 'admin_state_up'?: boolean | undefined;
    public description?: string;
    private 'listener_id': string | undefined;
    private 'redirect_pool_id'?: string | undefined;
    private 'redirect_listener_id'?: string | undefined;
    private 'redirect_url'?: string | undefined;
    public position?: number;
    public rules?: Array<CreateL7ruleReqInPolicy>;
    public constructor(action?: any, listenerId?: any) { 
        this['action'] = action;
        this['listener_id'] = listenerId;
    }
    public withName(name: string): CreateL7policyReq {
        this['name'] = name;
        return this;
    }
    public withAction(action: CreateL7policyReqActionEnum): CreateL7policyReq {
        this['action'] = action;
        return this;
    }
    public withTenantId(tenantId: string): CreateL7policyReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): CreateL7policyReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDescription(description: string): CreateL7policyReq {
        this['description'] = description;
        return this;
    }
    public withListenerId(listenerId: string): CreateL7policyReq {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): CreateL7policyReq {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId() {
        return this['redirect_pool_id'];
    }
    public withRedirectListenerId(redirectListenerId: string): CreateL7policyReq {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId() {
        return this['redirect_listener_id'];
    }
    public withRedirectUrl(redirectUrl: string): CreateL7policyReq {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl() {
        return this['redirect_url'];
    }
    public withPosition(position: number): CreateL7policyReq {
        this['position'] = position;
        return this;
    }
    public withRules(rules: Array<CreateL7ruleReqInPolicy>): CreateL7policyReq {
        this['rules'] = rules;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateL7policyReqActionEnum {
    REDIRECT_TO_POOL = 'REDIRECT_TO_POOL',
    REDIRECT_TO_LISTENER = 'REDIRECT_TO_LISTENER'
}
