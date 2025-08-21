import { MergeRequestApproverSettingResultDto } from './MergeRequestApproverSettingResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestApproverSettingsResponse extends SdkResponse {
    public body?: Array<MergeRequestApproverSettingResultDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestApproverSettingResultDto>): ListMergeRequestApproverSettingsResponse {
        this['body'] = body;
        return this;
    }
}