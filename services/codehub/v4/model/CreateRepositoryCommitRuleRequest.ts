import { CommitRuleCreateBodyDto } from './CommitRuleCreateBodyDto';


export class CreateRepositoryCommitRuleRequest {
    private 'repository_id'?: number;
    public body?: CommitRuleCreateBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateRepositoryCommitRuleRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: CommitRuleCreateBodyDto): CreateRepositoryCommitRuleRequest {
        this['body'] = body;
        return this;
    }
}