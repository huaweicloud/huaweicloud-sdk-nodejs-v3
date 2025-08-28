

export class NodeList {
    public port?: string;
    public status?: string;
    private 'node_id'?: string;
    public ip?: string;
    public constructor() { 
    }
    public withPort(port: string): NodeList {
        this['port'] = port;
        return this;
    }
    public withStatus(status: string): NodeList {
        this['status'] = status;
        return this;
    }
    public withNodeId(nodeId: string): NodeList {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIp(ip: string): NodeList {
        this['ip'] = ip;
        return this;
    }
}