import { BatchDeleteProtectedBranchesBodyDto } from './BatchDeleteProtectedBranchesBodyDto';


export class BatchDeleteProtectedBranchesRequest {
    private 'repository_id'?: number;
    public body?: BatchDeleteProtectedBranchesBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): BatchDeleteProtectedBranchesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: BatchDeleteProtectedBranchesBodyDto): BatchDeleteProtectedBranchesRequest {
        this['body'] = body;
        return this;
    }
}