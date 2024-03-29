

export class CreateIefMessageChannelRequestBody {
    private 'node_id'?: string;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): CreateIefMessageChannelRequestBody {
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