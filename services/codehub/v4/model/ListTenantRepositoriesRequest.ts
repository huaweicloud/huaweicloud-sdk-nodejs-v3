

export class ListTenantRepositoriesRequest {
    private 'repository_name'?: string;
    private 'member_number'?: number;
    public status?: ListTenantRepositoriesRequestStatusEnum | number;
    public owner?: string;
    private 'created_after'?: Date;
    private 'created_before'?: Date;
    public sort?: ListTenantRepositoriesRequestSortEnum | string;
    private 'sort_field'?: ListTenantRepositoriesRequestSortFieldEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withRepositoryName(repositoryName: string): ListTenantRepositoriesRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withMemberNumber(memberNumber: number): ListTenantRepositoriesRequest {
        this['member_number'] = memberNumber;
        return this;
    }
    public set memberNumber(memberNumber: number  | undefined) {
        this['member_number'] = memberNumber;
    }
    public get memberNumber(): number | undefined {
        return this['member_number'];
    }
    public withStatus(status: ListTenantRepositoriesRequestStatusEnum | number): ListTenantRepositoriesRequest {
        this['status'] = status;
        return this;
    }
    public withOwner(owner: string): ListTenantRepositoriesRequest {
        this['owner'] = owner;
        return this;
    }
    public withCreatedAfter(createdAfter: Date): ListTenantRepositoriesRequest {
        this['created_after'] = createdAfter;
        return this;
    }
    public set createdAfter(createdAfter: Date  | undefined) {
        this['created_after'] = createdAfter;
    }
    public get createdAfter(): Date | undefined {
        return this['created_after'];
    }
    public withCreatedBefore(createdBefore: Date): ListTenantRepositoriesRequest {
        this['created_before'] = createdBefore;
        return this;
    }
    public set createdBefore(createdBefore: Date  | undefined) {
        this['created_before'] = createdBefore;
    }
    public get createdBefore(): Date | undefined {
        return this['created_before'];
    }
    public withSort(sort: ListTenantRepositoriesRequestSortEnum | string): ListTenantRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
    public withSortField(sortField: ListTenantRepositoriesRequestSortFieldEnum | string): ListTenantRepositoriesRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListTenantRepositoriesRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListTenantRepositoriesRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withOffset(offset: number): ListTenantRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTenantRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTenantRepositoriesRequestStatusEnum {
    NUMBER_0 = 0,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_7 = 7
}
/**
    * @export
    * @enum {string}
    */
export enum ListTenantRepositoriesRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTenantRepositoriesRequestSortFieldEnum {
    OWNER = 'owner',
    CAPACITY = 'capacity',
    STATUS = 'status',
    CREATE_TIME = 'create_time',
    MEMBER_NUMBER = 'member_number',
    REPOSITORY_NAME = 'repository_name'
}
