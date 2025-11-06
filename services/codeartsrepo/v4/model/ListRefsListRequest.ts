

export class ListRefsListRequest {
    private 'repository_id'?: number;
    public type?: ListRefsListRequestTypeEnum | string;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRefsListRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withType(type: ListRefsListRequestTypeEnum | string): ListRefsListRequest {
        this['type'] = type;
        return this;
    }
    public withSearch(search: string): ListRefsListRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListRefsListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRefsListRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRefsListRequestTypeEnum {
    BRANCH = 'branch',
    TAG = 'tag'
}
