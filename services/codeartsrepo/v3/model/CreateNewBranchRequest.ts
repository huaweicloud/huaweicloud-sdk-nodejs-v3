import { CreateNewBranchRequestBody } from './CreateNewBranchRequestBody';


export class CreateNewBranchRequest {
    private 'repository_id'?: string;
    public body?: CreateNewBranchRequestBody;
    public constructor(repositoryId?: string) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: string): CreateNewBranchRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withBody(body: CreateNewBranchRequestBody): CreateNewBranchRequest {
        this['body'] = body;
        return this;
    }
}