import { BatchDeleteProtectedTagsBodyDto } from './BatchDeleteProtectedTagsBodyDto';


export class BatchDeleteProtectedTagsRequest {
    private 'repository_id'?: number;
    public body?: BatchDeleteProtectedTagsBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): BatchDeleteProtectedTagsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BatchDeleteProtectedTagsBodyDto): BatchDeleteProtectedTagsRequest {
        this['body'] = body;
        return this;
    }
}