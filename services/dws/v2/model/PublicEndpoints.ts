

export class PublicEndpoints {
    private 'public_connect_info'?: string | undefined;
    private 'jdbc_url'?: string | undefined;
    public constructor() { 
    }
    public withPublicConnectInfo(publicConnectInfo: string): PublicEndpoints {
        this['public_connect_info'] = publicConnectInfo;
        return this;
    }
    public set publicConnectInfo(publicConnectInfo: string | undefined) {
        this['public_connect_info'] = publicConnectInfo;
    }
    public get publicConnectInfo() {
        return this['public_connect_info'];
    }
    public withJdbcUrl(jdbcUrl: string): PublicEndpoints {
        this['jdbc_url'] = jdbcUrl;
        return this;
    }
    public set jdbcUrl(jdbcUrl: string | undefined) {
        this['jdbc_url'] = jdbcUrl;
    }
    public get jdbcUrl() {
        return this['jdbc_url'];
    }
}