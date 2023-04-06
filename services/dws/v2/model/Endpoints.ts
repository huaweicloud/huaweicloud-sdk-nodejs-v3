

export class Endpoints {
    private 'connect_info'?: string | undefined;
    private 'jdbc_url'?: string | undefined;
    public constructor() { 
    }
    public withConnectInfo(connectInfo: string): Endpoints {
        this['connect_info'] = connectInfo;
        return this;
    }
    public set connectInfo(connectInfo: string | undefined) {
        this['connect_info'] = connectInfo;
    }
    public get connectInfo() {
        return this['connect_info'];
    }
    public withJdbcUrl(jdbcUrl: string): Endpoints {
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