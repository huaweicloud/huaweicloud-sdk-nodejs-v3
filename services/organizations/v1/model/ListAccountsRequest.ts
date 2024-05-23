

export class ListAccountsRequest {
    private 'parent_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withParentId(parentId: string): ListAccountsRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withLimit(limit: number): ListAccountsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountsRequest {
        this['marker'] = marker;
        return this;
    }
}