import { MergeRequestApproverSettingResultDto } from './MergeRequestApproverSettingResultDto';


export class CreateMergeRequestApproverSettingRequest {
    private 'repository_id'?: number;
    public body?: MergeRequestApproverSettingResultDto;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): CreateMergeRequestApproverSettingRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBody(body: MergeRequestApproverSettingResultDto): CreateMergeRequestApproverSettingRequest {
        this['body'] = body;
        return this;
    }
}