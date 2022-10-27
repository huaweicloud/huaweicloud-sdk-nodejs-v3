

export class ListEnterpriseProjectRequest {
    public id?: string;
    public limit?: number;
    public name?: string;
    public offset?: number;
    private 'sort_dir'?: ListEnterpriseProjectRequestSortDirEnum | undefined;
    private 'sort_key'?: ListEnterpriseProjectRequestSortKeyEnum | undefined;
    public status?: number;
    public constructor() { 
    }
    public withId(id: string): ListEnterpriseProjectRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListEnterpriseProjectRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListEnterpriseProjectRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListEnterpriseProjectRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortDir(sortDir: ListEnterpriseProjectRequestSortDirEnum): ListEnterpriseProjectRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListEnterpriseProjectRequestSortDirEnum | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: ListEnterpriseProjectRequestSortKeyEnum): ListEnterpriseProjectRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListEnterpriseProjectRequestSortKeyEnum | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withStatus(status: number): ListEnterpriseProjectRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnterpriseProjectRequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEnterpriseProjectRequestSortKeyEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
