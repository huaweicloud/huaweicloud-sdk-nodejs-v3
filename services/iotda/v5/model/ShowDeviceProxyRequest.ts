

export class ShowDeviceProxyRequest {
    private 'Instance-Id'?: string;
    private 'proxy_id'?: string;
    public constructor(proxyId?: string) { 
        this['proxy_id'] = proxyId;
    }
    public withInstanceId(instanceId: string): ShowDeviceProxyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withProxyId(proxyId: string): ShowDeviceProxyRequest {
        this['proxy_id'] = proxyId;
        return this;
    }
    public set proxyId(proxyId: string  | undefined) {
        this['proxy_id'] = proxyId;
    }
    public get proxyId(): string | undefined {
        return this['proxy_id'];
    }
}