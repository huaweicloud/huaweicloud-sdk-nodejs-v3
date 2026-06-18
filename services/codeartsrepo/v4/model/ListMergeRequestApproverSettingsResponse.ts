import { MergeRequestApproverSettingResultDto } from './MergeRequestApproverSettingResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestApproverSettingsResponse extends SdkResponse {
    public body?: Array<MergeRequestApproverSettingResultDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MergeRequestApproverSettingResultDto>): ListMergeRequestApproverSettingsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListMergeRequestApproverSettingsResponse {
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