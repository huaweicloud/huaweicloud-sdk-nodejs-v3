

export class ShowBranchesByTwoRepositoryIdRequest {
    private 'repository_id'?: string;
    public constructor(repositoryId?: string) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: string): ShowBranchesByTwoRepositoryIdRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
}