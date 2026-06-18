import { MergeRequestApproverSettingResultDto } from './MergeRequestApproverSettingResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupMergeRequestApproverSettingsResponse extends SdkResponse {
    public body?: Array<MergeRequestApproverSettingResultDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestApproverSettingResultDto>): ListGroupMergeRequestApproverSettingsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListGroupMergeRequestApproverSettingsResponse {
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