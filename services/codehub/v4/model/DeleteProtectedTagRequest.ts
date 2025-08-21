

export class DeleteProtectedTagRequest {
    private 'repository_id'?: number;
    private 'tag_name'?: string;
    public constructor(repositoryId?: number, tagName?: string) { 
        this['repository_id'] = repositoryId;
        this['tag_name'] = tagName;
    }
    public withRepositoryId(repositoryId: number): DeleteProtectedTagRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTagName(tagName: string): DeleteProtectedTagRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
}