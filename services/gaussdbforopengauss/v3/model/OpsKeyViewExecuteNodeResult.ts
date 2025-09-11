

export class OpsKeyViewExecuteNodeResult {
    private 'node_id'?: string;
    private 'node_name'?: string;
    public role?: string;
    public type?: string;
    private 'distributed_id'?: string;
    private 'component_id'?: string;
    public detail?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): OpsKeyViewExecuteNodeResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): OpsKeyViewExecuteNodeResult {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withRole(role: string): OpsKeyViewExecuteNodeResult {
        this['role'] = role;
        return this;
    }
    public withType(type: string): OpsKeyViewExecuteNodeResult {
        this['type'] = type;
        return this;
    }
    public withDistributedId(distributedId: string): OpsKeyViewExecuteNodeResult {
        this['distributed_id'] = distributedId;
        return this;
    }
    public set distributedId(distributedId: string  | undefined) {
        this['distributed_id'] = distributedId;
    }
    public get distributedId(): string | undefined {
        return this['distributed_id'];
    }
    public withComponentId(componentId: string): OpsKeyViewExecuteNodeResult {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withDetail(detail: string): OpsKeyViewExecuteNodeResult {
        this['detail'] = detail;
        return this;
    }
}