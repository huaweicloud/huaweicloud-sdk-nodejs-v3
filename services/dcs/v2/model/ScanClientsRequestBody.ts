

export class ScanClientsRequestBody {
    private 'node_id'?: string;
    private 'clean_cache'?: boolean;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): ScanClientsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withCleanCache(cleanCache: boolean): ScanClientsRequestBody {
        this['clean_cache'] = cleanCache;
        return this;
    }
    public set cleanCache(cleanCache: boolean  | undefined) {
        this['clean_cache'] = cleanCache;
    }
    public get cleanCache(): boolean | undefined {
        return this['clean_cache'];
    }
}