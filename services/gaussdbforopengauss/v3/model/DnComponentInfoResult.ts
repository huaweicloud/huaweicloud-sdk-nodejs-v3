

export class DnComponentInfoResult {
    private 'node_name'?: string;
    private 'node_id'?: string;
    private 'component_id'?: string;
    public role?: string;
    public constructor() { 
    }
    public withNodeName(nodeName: string): DnComponentInfoResult {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeId(nodeId: string): DnComponentInfoResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): DnComponentInfoResult {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withRole(role: string): DnComponentInfoResult {
        this['role'] = role;
        return this;
    }
}