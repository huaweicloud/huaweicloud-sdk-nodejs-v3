

export class WhitelistResp {
    public id: string;
    private 'tenant_id': string | undefined;
    private 'listener_id': string | undefined;
    private 'enable_whitelist': boolean | undefined;
    public whitelist: string;
    public constructor(id?: any, tenantId?: any, listenerId?: any, enableWhitelist?: any, whitelist?: any) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['listener_id'] = listenerId;
        this['enable_whitelist'] = enableWhitelist;
        this['whitelist'] = whitelist;
    }
    public withId(id: string): WhitelistResp {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): WhitelistResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withListenerId(listenerId: string): WhitelistResp {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withEnableWhitelist(enableWhitelist: boolean): WhitelistResp {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: string): WhitelistResp {
        this['whitelist'] = whitelist;
        return this;
    }
}