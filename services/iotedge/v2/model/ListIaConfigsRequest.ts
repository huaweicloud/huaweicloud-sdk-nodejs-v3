

export class ListIaConfigsRequest {
    private 'node_id'?: string;
    private 'ia_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(nodeId?: string, iaId?: string) { 
        this['node_id'] = nodeId;
        this['ia_id'] = iaId;
    }
    public withNodeId(nodeId: string): ListIaConfigsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIaId(iaId: string): ListIaConfigsRequest {
        this['ia_id'] = iaId;
        return this;
    }
    public set iaId(iaId: string  | undefined) {
        this['ia_id'] = iaId;
    }
    public get iaId(): string | undefined {
        return this['ia_id'];
    }
    public withOffset(offset: number): ListIaConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIaConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}