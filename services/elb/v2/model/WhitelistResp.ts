

export class WhitelistResp {
    public id?: string;
    private 'tenant_id'?: string;
    private 'listener_id'?: string;
    private 'enable_whitelist'?: boolean;
    public whitelist?: string;
    public constructor(id?: string, tenantId?: string, listenerId?: string, enableWhitelist?: boolean, whitelist?: string) { 
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
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withListenerId(listenerId: string): WhitelistResp {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withEnableWhitelist(enableWhitelist: boolean): WhitelistResp {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: string): WhitelistResp {
        this['whitelist'] = whitelist;
        return this;
    }
}