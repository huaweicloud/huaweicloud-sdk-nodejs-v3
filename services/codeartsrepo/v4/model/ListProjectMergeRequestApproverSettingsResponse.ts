import { MergeRequestApproverSettingResultDto } from './MergeRequestApproverSettingResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectMergeRequestApproverSettingsResponse extends SdkResponse {
    public body?: Array<MergeRequestApproverSettingResultDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestApproverSettingResultDto>): ListProjectMergeRequestApproverSettingsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectMergeRequestApproverSettingsResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}