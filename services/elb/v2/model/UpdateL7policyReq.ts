

export class UpdateL7policyReq {
    public name?: string;
    private 'admin_state_up'?: boolean | undefined;
    public description?: string;
    private 'redirect_listener_id'?: string | undefined;
    private 'redirect_pool_id'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdateL7policyReq {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateL7policyReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDescription(description: string): UpdateL7policyReq {
        this['description'] = description;
        return this;
    }
    public withRedirectListenerId(redirectListenerId: string): UpdateL7policyReq {
        this['redirect_listener_id'] = redirectListenerId;
        return this;
    }
    public set redirectListenerId(redirectListenerId: string | undefined) {
        this['redirect_listener_id'] = redirectListenerId;
    }
    public get redirectListenerId() {
        return this['redirect_listener_id'];
    }
    public withRedirectPoolId(redirectPoolId: string): UpdateL7policyReq {
        this['redirect_pool_id'] = redirectPoolId;
        return this;
    }
    public set redirectPoolId(redirectPoolId: string | undefined) {
        this['redirect_pool_id'] = redirectPoolId;
    }
    public get redirectPoolId() {
        return this['redirect_pool_id'];
    }
}