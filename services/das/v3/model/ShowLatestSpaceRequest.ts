

export class ShowLatestSpaceRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'node_id'?: string;
    public constructor(instanceId?: string, engineType?: string) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
    }
    public withInstanceId(instanceId: string): ShowLatestSpaceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowLatestSpaceRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNodeId(nodeId: string): ShowLatestSpaceRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}