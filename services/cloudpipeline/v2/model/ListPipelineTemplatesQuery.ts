

export class ListPipelineTemplatesQuery {
    public language?: string;
    private 'is_system'?: boolean;
    public name?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withLanguage(language: string): ListPipelineTemplatesQuery {
        this['language'] = language;
        return this;
    }
    public withIsSystem(isSystem: boolean): ListPipelineTemplatesQuery {
        this['is_system'] = isSystem;
        return this;
    }
    public set isSystem(isSystem: boolean  | undefined) {
        this['is_system'] = isSystem;
    }
    public get isSystem(): boolean | undefined {
        return this['is_system'];
    }
    public withName(name: string): ListPipelineTemplatesQuery {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListPipelineTemplatesQuery {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineTemplatesQuery {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListPipelineTemplatesQuery {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPipelineTemplatesQuery {
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