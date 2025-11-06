import { ReviewSettingParamDto } from './ReviewSettingParamDto';


export class UpdateGroupReviewSettingsRequest {
    private 'group_id'?: number;
    public body?: ReviewSettingParamDto;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): UpdateGroupReviewSettingsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withBody(body: ReviewSettingParamDto): UpdateGroupReviewSettingsRequest {
        this['body'] = body;
        return this;
    }
}