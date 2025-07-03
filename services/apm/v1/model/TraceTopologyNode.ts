

export class TraceTopologyNode {
    private 'node_id'?: number;
    private 'node_name'?: string;
    public hint?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: number): TraceTopologyNode {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: number  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): number | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): TraceTopologyNode {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withHint(hint: string): TraceTopologyNode {
        this['hint'] = hint;
        return this;
    }
}