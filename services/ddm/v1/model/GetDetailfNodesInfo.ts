

export class GetDetailfNodesInfo {
    public status?: string;
    public port?: string;
    public ip?: string;
    private 'group_id'?: string;
    private 'node_id'?: string;
    public constructor(status?: string, port?: string, ip?: string, groupId?: string, nodeId?: string) { 
        this['status'] = status;
        this['port'] = port;
        this['ip'] = ip;
        this['group_id'] = groupId;
        this['node_id'] = nodeId;
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
    public withGroupId(groupId: string): GetDetailfNodesInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withNodeId(nodeId: string): GetDetailfNodesInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}