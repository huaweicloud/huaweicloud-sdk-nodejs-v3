import { GeneralPolicyBodyDto } from './GeneralPolicyBodyDto';


export class UpdateRepositoryGeneralPolicyRequest {
    private 'repository_id'?: number;
    public body?: GeneralPolicyBodyDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): UpdateRepositoryGeneralPolicyRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: GeneralPolicyBodyDto): UpdateRepositoryGeneralPolicyRequest {
        this['body'] = body;
        return this;
    }
}