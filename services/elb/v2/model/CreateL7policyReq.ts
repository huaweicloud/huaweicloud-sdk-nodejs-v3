import { CreateL7ruleReqInPolicy } from './CreateL7ruleReqInPolicy';


export class CreateL7policyReq {
    public name?: string;
    public action?: CreateL7policyReqActionEnum | string;
    private 'tenant_id'?: string;
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'listener_id'?: string;
    private 'redirect_pool_id'?: string;
    private 'redirect_listener_id'?: string;
    private 'redirect_url'?: string;
    public position?: number;
    public rules?: Array<CreateL7ruleReqInPolicy>;
    public constructor(action?: string, listenerId?: string) { 
        this['action'] = action;
        this['listener_id'] = listenerId;
    }
    public withName(name: string): CreateL7policyReq {
        this['name'] = name;
        return this;
    }
    public withAction(action: CreateL7policyReqActionEnum | string): CreateL7policyReq {
        this['action'] = action;
        return this;
    }
    public withTenantId(tenantId: string): CreateL7policyReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): CreateL7policyReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
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
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): CreateL7policyReq {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string  | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId(): string | undefined {
        return this['redirect_pool_id'];
    }
    public withRedirectListenerId(redirectListenerId: string): CreateL7policyReq {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string  | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId(): string | undefined {
        return this['redirect_listener_id'];
    }
    public withRedirectUrl(redirectUrl: string): CreateL7policyReq {
        this['redirect_url'] = redirectUrl;
        return this;
    }
    public set redirectUrl(redirectUrl: string  | undefined) {
        this['redirect_url'] = redirectUrl;
    }
    public get redirectUrl(): string | undefined {
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
