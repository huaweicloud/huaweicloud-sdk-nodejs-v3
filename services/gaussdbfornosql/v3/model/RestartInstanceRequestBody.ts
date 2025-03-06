

export class RestartInstanceRequestBody {
    private 'node_id'?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): RestartInstanceRequestBody {
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