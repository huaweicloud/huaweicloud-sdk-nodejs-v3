import { CreateBranchDto } from './CreateBranchDto';


export class CreateBranchRequest {
    private 'repository_id'?: number;
    public body?: CreateBranchDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateBranchRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: CreateBranchDto): CreateBranchRequest {
        this['body'] = body;
        return this;
    }
}