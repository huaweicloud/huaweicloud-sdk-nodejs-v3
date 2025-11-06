

export class DeleteRepositoryLabelRequest {
    private 'repository_id'?: number;
    public name?: string;
    public constructor(repositoryId?: number, name?: string) { 
        this['repository_id'] = repositoryId;
        this['name'] = name;
    }
    public withRepositoryId(repositoryId: number): DeleteRepositoryLabelRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withName(name: string): DeleteRepositoryLabelRequest {
        this['name'] = name;
        return this;
    }
}