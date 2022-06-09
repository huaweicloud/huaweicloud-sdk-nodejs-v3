

export class CreateWhitelistReq {
    private 'tenant_id'?: string | undefined;
    private 'listener_id': string | undefined;
    private 'enable_whitelist'?: boolean | undefined;
    public whitelist?: string;
    public constructor(listenerId?: any) { 
        this['listener_id'] = listenerId;
    }
    public withTenantId(tenantId: string): CreateWhitelistReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withListenerId(listenerId: string): CreateWhitelistReq {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withEnableWhitelist(enableWhitelist: boolean): CreateWhitelistReq {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: string): CreateWhitelistReq {
        this['whitelist'] = whitelist;
        return this;
    }
}