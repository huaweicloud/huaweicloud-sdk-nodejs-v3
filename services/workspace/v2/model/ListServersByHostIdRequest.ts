

export class ListServersByHostIdRequest {
    private 'host_id'?: string;
    private 'sort_field'?: ListServersByHostIdRequestSortFieldEnum | string;
    private 'sort_type'?: ListServersByHostIdRequestSortTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(hostId?: string) { 
        this['host_id'] = hostId;
    }
    public withHostId(hostId: string): ListServersByHostIdRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withSortField(sortField: ListServersByHostIdRequestSortFieldEnum | string): ListServersByHostIdRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListServersByHostIdRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListServersByHostIdRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListServersByHostIdRequestSortTypeEnum | string): ListServersByHostIdRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListServersByHostIdRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListServersByHostIdRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withLimit(limit: number): ListServersByHostIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServersByHostIdRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServersByHostIdRequestSortFieldEnum {
    VCPU = 'vcpu',
    MEMORY = 'memory'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServersByHostIdRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
