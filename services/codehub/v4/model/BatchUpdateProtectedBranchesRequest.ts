import { BatchUpdateProtectedBranchesBodyDto } from './BatchUpdateProtectedBranchesBodyDto';


export class BatchUpdateProtectedBranchesRequest {
    private 'repository_id'?: number;
    public body?: BatchUpdateProtectedBranchesBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): BatchUpdateProtectedBranchesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BatchUpdateProtectedBranchesBodyDto): BatchUpdateProtectedBranchesRequest {
        this['body'] = body;
        return this;
    }
}