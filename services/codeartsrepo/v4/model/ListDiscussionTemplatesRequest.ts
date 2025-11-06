

export class ListDiscussionTemplatesRequest {
    private 'repository_id'?: number;
    private 'is_default'?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListDiscussionTemplatesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withIsDefault(isDefault: boolean): ListDiscussionTemplatesRequest {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withOffset(offset: number): ListDiscussionTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDiscussionTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}