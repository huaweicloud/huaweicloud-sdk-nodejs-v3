

export class ListHyperinstanceServersRequest {
    public id?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ListHyperinstanceServersRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListHyperinstanceServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHyperinstanceServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListHyperinstanceServersRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListHyperinstanceServersRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}