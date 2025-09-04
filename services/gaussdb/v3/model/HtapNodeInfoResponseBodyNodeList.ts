

export class HtapNodeInfoResponseBodyNodeList {
    private 'node_id'?: string;
    private 'node_name'?: string;
    public role?: string;
    public constructor(nodeId?: string, nodeName?: string, role?: string) { 
        this['node_id'] = nodeId;
        this['node_name'] = nodeName;
        this['role'] = role;
    }
    public withNodeId(nodeId: string): HtapNodeInfoResponseBodyNodeList {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): HtapNodeInfoResponseBodyNodeList {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withRole(role: string): HtapNodeInfoResponseBodyNodeList {
        this['role'] = role;
        return this;
    }
}