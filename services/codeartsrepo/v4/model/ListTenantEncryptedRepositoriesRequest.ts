

export class ListTenantEncryptedRepositoriesRequest {
    private 'tenant_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListTenantEncryptedRepositoriesRequestOrderByEnum | string;
    public sort?: ListTenantEncryptedRepositoriesRequestSortEnum | string;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): ListTenantEncryptedRepositoriesRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withOffset(offset: number): ListTenantEncryptedRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTenantEncryptedRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListTenantEncryptedRepositoriesRequestOrderByEnum | string): ListTenantEncryptedRepositoriesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListTenantEncryptedRepositoriesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListTenantEncryptedRepositoriesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListTenantEncryptedRepositoriesRequestSortEnum | string): ListTenantEncryptedRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTenantEncryptedRepositoriesRequestOrderByEnum {
    REPONAME = 'repoName',
    OWNERNAME = 'ownerName'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTenantEncryptedRepositoriesRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
