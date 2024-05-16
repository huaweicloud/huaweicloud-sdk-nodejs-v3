

export class ReadableNodeInfos {
    private 'data_ip'?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    public constructor() { 
    }
    public withDataIp(dataIp: string): ReadableNodeInfos {
        this['data_ip'] = dataIp;
        return this;
    }
    public set dataIp(dataIp: string  | undefined) {
        this['data_ip'] = dataIp;
    }
    public get dataIp(): string | undefined {
        return this['data_ip'];
    }
    public withNodeId(nodeId: string): ReadableNodeInfos {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ReadableNodeInfos {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
}