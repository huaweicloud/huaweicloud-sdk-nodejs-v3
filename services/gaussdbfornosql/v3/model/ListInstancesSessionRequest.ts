

export class ListInstancesSessionRequest {
    private 'node_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'addr_prefix'?: string;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): ListInstancesSessionRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOffset(offset: number): ListInstancesSessionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesSessionRequest {
        this['limit'] = limit;
        return this;
    }
    public withAddrPrefix(addrPrefix: string): ListInstancesSessionRequest {
        this['addr_prefix'] = addrPrefix;
        return this;
    }
    public set addrPrefix(addrPrefix: string  | undefined) {
        this['addr_prefix'] = addrPrefix;
    }
    public get addrPrefix(): string | undefined {
        return this['addr_prefix'];
    }
}