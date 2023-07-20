

export class ListDatabasesRequest {
    public keyword?: string;
    public limit?: number;
    public offset?: number;
    public tags?: string;
    private 'with-priv'?: boolean;
    public constructor() { 
    }
    public withKeyword(keyword: string): ListDatabasesRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withLimit(limit: number): ListDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDatabasesRequest {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: string): ListDatabasesRequest {
        this['tags'] = tags;
        return this;
    }
    public withWithPriv(withPriv: boolean): ListDatabasesRequest {
        this['with-priv'] = withPriv;
        return this;
    }
    public set withPriv(withPriv: boolean  | undefined) {
        this['with-priv'] = withPriv;
    }
    public get withPriv(): boolean | undefined {
        return this['with-priv'];
    }
}