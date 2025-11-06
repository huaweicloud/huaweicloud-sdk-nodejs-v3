import { MergeRequestApproverSettingResultDto } from './MergeRequestApproverSettingResultDto';


export class UpdateMergeRequestApproverSettingRequest {
    private 'repository_id'?: number;
    private 'setting_id'?: number;
    public body?: MergeRequestApproverSettingResultDto;
    public constructor(repositoryId?: number, settingId?: number) { 
        this['repository_id'] = repositoryId;
        this['setting_id'] = settingId;
    }
    public withRepositoryId(repositoryId: number): UpdateMergeRequestApproverSettingRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withSettingId(settingId: number): UpdateMergeRequestApproverSettingRequest {
        this['setting_id'] = settingId;
        return this;
    }
    public set settingId(settingId: number  | undefined) {
        this['setting_id'] = settingId;
    }
    public get settingId(): number | undefined {
        return this['setting_id'];
    }
    public withBody(body: MergeRequestApproverSettingResultDto): UpdateMergeRequestApproverSettingRequest {
        this['body'] = body;
        return this;
    }
}