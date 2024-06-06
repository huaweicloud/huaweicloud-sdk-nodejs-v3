

export class SingleNodeInfo {
    private 'node_id'?: string;
    public name?: string;
    public constructor(nodeId?: string, name?: string) { 
        this['node_id'] = nodeId;
        this['name'] = name;
    }
    public withNodeId(nodeId: string): SingleNodeInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withName(name: string): SingleNodeInfo {
        this['name'] = name;
        return this;
    }
}