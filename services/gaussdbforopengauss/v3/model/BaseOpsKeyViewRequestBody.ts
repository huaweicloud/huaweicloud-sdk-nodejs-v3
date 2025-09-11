

export class BaseOpsKeyViewRequestBody {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'component_id'?: string;
    public constructor(nodeId?: string, componentId?: string) { 
        this['node_id'] = nodeId;
        this['component_id'] = componentId;
    }
    public withInstanceId(instanceId: string): BaseOpsKeyViewRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): BaseOpsKeyViewRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): BaseOpsKeyViewRequestBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
}