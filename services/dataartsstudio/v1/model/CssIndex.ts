

export class CssIndex {
    private 'index_name'?: string;
    private 'index_guid'?: string;
    private 'index_qualified_name'?: string;
    private 'index_doc_count'?: number;
    private 'index_data_size'?: number;
    public constructor() { 
    }
    public withIndexName(indexName: string): CssIndex {
        this['index_name'] = indexName;
        return this;
    }
    public set indexName(indexName: string  | undefined) {
        this['index_name'] = indexName;
    }
    public get indexName(): string | undefined {
        return this['index_name'];
    }
    public withIndexGuid(indexGuid: string): CssIndex {
        this['index_guid'] = indexGuid;
        return this;
    }
    public set indexGuid(indexGuid: string  | undefined) {
        this['index_guid'] = indexGuid;
    }
    public get indexGuid(): string | undefined {
        return this['index_guid'];
    }
    public withIndexQualifiedName(indexQualifiedName: string): CssIndex {
        this['index_qualified_name'] = indexQualifiedName;
        return this;
    }
    public set indexQualifiedName(indexQualifiedName: string  | undefined) {
        this['index_qualified_name'] = indexQualifiedName;
    }
    public get indexQualifiedName(): string | undefined {
        return this['index_qualified_name'];
    }
    public withIndexDocCount(indexDocCount: number): CssIndex {
        this['index_doc_count'] = indexDocCount;
        return this;
    }
    public set indexDocCount(indexDocCount: number  | undefined) {
        this['index_doc_count'] = indexDocCount;
    }
    public get indexDocCount(): number | undefined {
        return this['index_doc_count'];
    }
    public withIndexDataSize(indexDataSize: number): CssIndex {
        this['index_data_size'] = indexDataSize;
        return this;
    }
    public set indexDataSize(indexDataSize: number  | undefined) {
        this['index_data_size'] = indexDataSize;
    }
    public get indexDataSize(): number | undefined {
        return this['index_data_size'];
    }
}