import { CommitRuleUpdateBodyDto } from './CommitRuleUpdateBodyDto';


export class UpdateRepositoryCommitRuleRequest {
    private 'repository_id'?: number;
    private 'commit_rule_id'?: number;
    public body?: CommitRuleUpdateBodyDto;
    public constructor(repositoryId?: number, commitRuleId?: number) { 
        this['repository_id'] = repositoryId;
        this['commit_rule_id'] = commitRuleId;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryCommitRuleRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withCommitRuleId(commitRuleId: number): UpdateRepositoryCommitRuleRequest {
        this['commit_rule_id'] = commitRuleId;
        return this;
    }
    public set commitRuleId(commitRuleId: number  | undefined) {
        this['commit_rule_id'] = commitRuleId;
    }
    public get commitRuleId(): number | undefined {
        return this['commit_rule_id'];
    }
    public withBody(body: CommitRuleUpdateBodyDto): UpdateRepositoryCommitRuleRequest {
        this['body'] = body;
        return this;
    }
}