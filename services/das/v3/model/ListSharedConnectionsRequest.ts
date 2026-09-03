

export class ListSharedConnectionsRequest {
    private 'connection_id'?: string;
    public keywords?: string;
    private 'cur_page'?: string;
    private 'per_page'?: string;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ListSharedConnectionsRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withKeywords(keywords: string): ListSharedConnectionsRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withCurPage(curPage: string): ListSharedConnectionsRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: string  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): string | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: string): ListSharedConnectionsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): string | undefined {
        return this['per_page'];
    }
}