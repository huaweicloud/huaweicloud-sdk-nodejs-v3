import { StatSummary } from './StatSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStatSummaryResponse extends SdkResponse {
    public summary?: Array<StatSummary>;
    public total?: number;
    private 'stat_type'?: ListStatSummaryResponseStatTypeEnum | undefined;
    public constructor() { 
        super();
    }
    public withSummary(summary: Array<StatSummary>): ListStatSummaryResponse {
        this['summary'] = summary;
        return this;
    }
    public withTotal(total: number): ListStatSummaryResponse {
        this['total'] = total;
        return this;
    }
    public withStatType(statType: ListStatSummaryResponseStatTypeEnum): ListStatSummaryResponse {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: ListStatSummaryResponseStatTypeEnum | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStatSummaryResponseStatTypeEnum {
    VIDEO_DURATION = 'video_duration',
    REMUX_FILE_DURATION = 'remux_file_duration',
    TRANSCODE_TASK_NUMBER = 'transcode_task_number',
    TRANSCODE_DURATION = 'transcode_duration'
}
