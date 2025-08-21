import { RepositoryProtectedTagBodyDto } from './RepositoryProtectedTagBodyDto';


export class BatchCreateProtectedTagsRequest {
    private 'repository_id'?: number;
    public body?: RepositoryProtectedTagBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): BatchCreateProtectedTagsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: RepositoryProtectedTagBodyDto): BatchCreateProtectedTagsRequest {
        this['body'] = body;
        return this;
    }
}