import { UpdateBranchDto } from './UpdateBranchDto';


export class UpdateBranchNameRequest {
    private 'repository_id'?: number;
    public body?: UpdateBranchDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): UpdateBranchNameRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: UpdateBranchDto): UpdateBranchNameRequest {
        this['body'] = body;
        return this;
    }
}