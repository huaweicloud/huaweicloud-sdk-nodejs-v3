

export class GetDetailfNodesInfo {
    public status?: string;
    public port?: string;
    public ip?: string;
    public constructor(status?: string, port?: string, ip?: string) { 
        this['status'] = status;
        this['port'] = port;
        this['ip'] = ip;
    }
    public withStatus(status: string): GetDetailfNodesInfo {
        this['status'] = status;
        return this;
    }
    public withPort(port: string): GetDetailfNodesInfo {
        this['port'] = port;
        return this;
    }
    public withIp(ip: string): GetDetailfNodesInfo {
        this['ip'] = ip;
        return this;
    }
}