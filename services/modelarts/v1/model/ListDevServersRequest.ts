

export class ListDevServersRequest {
    public owner?: string;
    private 'sort_dir'?: ListDevServersRequestSortDirEnum | string;
    private 'sort_key'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withOwner(owner: string): ListDevServersRequest {
        this['owner'] = owner;
        return this;
    }
    public withSortDir(sortDir: ListDevServersRequestSortDirEnum | string): ListDevServersRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListDevServersRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListDevServersRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListDevServersRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withLimit(limit: number): ListDevServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDevServersRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDevServersRequestSortDirEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
