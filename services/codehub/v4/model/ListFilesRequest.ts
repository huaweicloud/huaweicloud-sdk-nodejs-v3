

export class ListFilesRequest {
    private 'repository_id'?: number;
    private 'ref_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListFilesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRefName(refName: string): ListFilesRequest {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withOffset(offset: number): ListFilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFilesRequest {
        this['limit'] = limit;
        return this;
    }
}