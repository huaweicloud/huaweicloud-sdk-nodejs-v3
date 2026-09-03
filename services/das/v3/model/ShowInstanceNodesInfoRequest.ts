

export class ShowInstanceNodesInfoRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'all_nodes'?: string;
    private 'show_hidden_nodes'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ShowInstanceNodesInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowInstanceNodesInfoRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withAllNodes(allNodes: string): ShowInstanceNodesInfoRequest {
        this['all_nodes'] = allNodes;
        return this;
    }
    public set allNodes(allNodes: string  | undefined) {
        this['all_nodes'] = allNodes;
    }
    public get allNodes(): string | undefined {
        return this['all_nodes'];
    }
    public withShowHiddenNodes(showHiddenNodes: string): ShowInstanceNodesInfoRequest {
        this['show_hidden_nodes'] = showHiddenNodes;
        return this;
    }
    public set showHiddenNodes(showHiddenNodes: string  | undefined) {
        this['show_hidden_nodes'] = showHiddenNodes;
    }
    public get showHiddenNodes(): string | undefined {
        return this['show_hidden_nodes'];
    }
}