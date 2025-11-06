import { BatchUpdateProtectedTagsBodyDto } from './BatchUpdateProtectedTagsBodyDto';


export class BatchUpdateProtectedTagsRequest {
    private 'repository_id'?: number;
    public body?: BatchUpdateProtectedTagsBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): BatchUpdateProtectedTagsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BatchUpdateProtectedTagsBodyDto): BatchUpdateProtectedTagsRequest {
        this['body'] = body;
        return this;
    }
}