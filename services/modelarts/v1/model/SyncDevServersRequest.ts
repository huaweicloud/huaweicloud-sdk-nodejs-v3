

export class SyncDevServersRequest {
    public owner?: string;
    private 'sort_dir'?: SyncDevServersRequestSortDirEnum | string;
    private 'sort_key'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOwner(owner: string): SyncDevServersRequest {
        this['owner'] = owner;
        return this;
    }
    public withSortDir(sortDir: SyncDevServersRequestSortDirEnum | string): SyncDevServersRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: SyncDevServersRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): SyncDevServersRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): SyncDevServersRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withOffset(offset: number): SyncDevServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SyncDevServersRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SyncDevServersRequestSortDirEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
