

export class DeleteModuleRequest {
    private 'edge_node_id'?: string;
    private 'module_id'?: string;
    public constructor(edgeNodeId?: string, moduleId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['module_id'] = moduleId;
    }
    public withEdgeNodeId(edgeNodeId: string): DeleteModuleRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withModuleId(moduleId: string): DeleteModuleRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
}