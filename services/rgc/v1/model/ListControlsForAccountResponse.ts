import { PageInfoDto } from './PageInfoDto';
import { TargetControl } from './TargetControl';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListControlsForAccountResponse extends SdkResponse {
    private 'control_summaries'?: Array<TargetControl>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withControlSummaries(controlSummaries: Array<TargetControl>): ListControlsForAccountResponse {
        this['control_summaries'] = controlSummaries;
        return this;
    }
    public set controlSummaries(controlSummaries: Array<TargetControl>  | undefined) {
        this['control_summaries'] = controlSummaries;
    }
    public get controlSummaries(): Array<TargetControl> | undefined {
        return this['control_summaries'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListControlsForAccountResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}