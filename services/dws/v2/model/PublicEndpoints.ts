

export class PublicEndpoints {
    private 'public_connect_info'?: string;
    private 'jdbc_url'?: string;
    public constructor() { 
    }
    public withPublicConnectInfo(publicConnectInfo: string): PublicEndpoints {
        this['public_connect_info'] = publicConnectInfo;
        return this;
    }
    public set publicConnectInfo(publicConnectInfo: string  | undefined) {
        this['public_connect_info'] = publicConnectInfo;
    }
    public get publicConnectInfo(): string | undefined {
        return this['public_connect_info'];
    }
    public withJdbcUrl(jdbcUrl: string): PublicEndpoints {
        this['jdbc_url'] = jdbcUrl;
        return this;
    }
    public set jdbcUrl(jdbcUrl: string  | undefined) {
        this['jdbc_url'] = jdbcUrl;
    }
    public get jdbcUrl(): string | undefined {
        return this['jdbc_url'];
    }
}