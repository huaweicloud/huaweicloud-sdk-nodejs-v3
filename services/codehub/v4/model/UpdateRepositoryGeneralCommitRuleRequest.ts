import { GeneralCommitRuleBodyDto } from './GeneralCommitRuleBodyDto';


export class UpdateRepositoryGeneralCommitRuleRequest {
    private 'repository_id'?: number;
    public body?: GeneralCommitRuleBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryGeneralCommitRuleRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: GeneralCommitRuleBodyDto): UpdateRepositoryGeneralCommitRuleRequest {
        this['body'] = body;
        return this;
    }
}