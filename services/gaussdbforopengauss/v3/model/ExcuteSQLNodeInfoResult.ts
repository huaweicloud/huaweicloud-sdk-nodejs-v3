

export class ExcuteSQLNodeInfoResult {
    private 'node_id'?: string;
    private 'node_name'?: string;
    public role?: string;
    private 'instance_id'?: string;
    private 'component_type'?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): ExcuteSQLNodeInfoResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ExcuteSQLNodeInfoResult {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withRole(role: string): ExcuteSQLNodeInfoResult {
        this['role'] = role;
        return this;
    }
    public withInstanceId(instanceId: string): ExcuteSQLNodeInfoResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withComponentType(componentType: string): ExcuteSQLNodeInfoResult {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): string | undefined {
        return this['component_type'];
    }
}