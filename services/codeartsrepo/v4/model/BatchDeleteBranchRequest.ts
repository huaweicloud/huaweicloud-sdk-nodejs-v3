import { BatchDeleteBranchDto } from './BatchDeleteBranchDto';


export class BatchDeleteBranchRequest {
    private 'repository_id'?: number;
    public body?: BatchDeleteBranchDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): BatchDeleteBranchRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BatchDeleteBranchDto): BatchDeleteBranchRequest {
        this['body'] = body;
        return this;
    }
}