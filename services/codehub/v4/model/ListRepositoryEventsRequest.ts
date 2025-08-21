

export class ListRepositoryEventsRequest {
    private 'repository_id'?: number;
    private 'author_id'?: number;
    public filter?: ListRepositoryEventsRequestFilterEnum | string;
    public before?: Date;
    public after?: Date;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryEventsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withAuthorId(authorId: number): ListRepositoryEventsRequest {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: number  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): number | undefined {
        return this['author_id'];
    }
    public withFilter(filter: ListRepositoryEventsRequestFilterEnum | string): ListRepositoryEventsRequest {
        this['filter'] = filter;
        return this;
    }
    public withBefore(before: Date): ListRepositoryEventsRequest {
        this['before'] = before;
        return this;
    }
    public withAfter(after: Date): ListRepositoryEventsRequest {
        this['after'] = after;
        return this;
    }
    public withOffset(offset: number): ListRepositoryEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryEventsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryEventsRequestFilterEnum {
    ALL = 'all',
    PUSH = 'push'
}
