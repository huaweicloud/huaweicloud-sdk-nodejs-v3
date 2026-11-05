

export class ListHyperinstanceGroupRequest {
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListHyperinstanceGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHyperinstanceGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListHyperinstanceGroupRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListHyperinstanceGroupRequest {
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