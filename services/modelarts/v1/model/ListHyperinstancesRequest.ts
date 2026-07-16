

export class ListHyperinstancesRequest {
    private 'sort_dir'?: ListHyperinstancesRequestSortDirEnum | string;
    private 'sort_key'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withSortDir(sortDir: ListHyperinstancesRequestSortDirEnum | string): ListHyperinstancesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListHyperinstancesRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListHyperinstancesRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListHyperinstancesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withLimit(limit: number): ListHyperinstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListHyperinstancesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHyperinstancesRequestSortDirEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
