

export class ShowSwitchableFlavorsRequest {
    public id?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowSwitchableFlavorsRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ShowSwitchableFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowSwitchableFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ShowSwitchableFlavorsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ShowSwitchableFlavorsRequest {
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