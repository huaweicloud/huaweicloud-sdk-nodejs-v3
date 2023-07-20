

export class ProxyUpdateProxyConnectionPoolTypeRequest {
    private 'connection_pool_type'?: string;
    public constructor(connectionPoolType?: string) { 
        this['connection_pool_type'] = connectionPoolType;
    }
    public withConnectionPoolType(connectionPoolType: string): ProxyUpdateProxyConnectionPoolTypeRequest {
        this['connection_pool_type'] = connectionPoolType;
        return this;
    }
    public set connectionPoolType(connectionPoolType: string  | undefined) {
        this['connection_pool_type'] = connectionPoolType;
    }
    public get connectionPoolType(): string | undefined {
        return this['connection_pool_type'];
    }
}