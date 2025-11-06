import { MergeRequestApproverSettingResultDto } from './MergeRequestApproverSettingResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMergeRequestApproverSettingsResponse extends SdkResponse {
    public body?: Array<MergeRequestApproverSettingResultDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestApproverSettingResultDto>): ListProjectMergeRequestApproverSettingsResponse {
        this['body'] = body;
        return this;
    }
}