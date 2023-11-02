import { L1Statistic } from './L1Statistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBusinessAssetsStatisticResponse extends SdkResponse {
    public count?: number;
    private 'subject_area_group_statistics'?: Array<L1Statistic>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowBusinessAssetsStatisticResponse {
        this['count'] = count;
        return this;
    }
    public withSubjectAreaGroupStatistics(subjectAreaGroupStatistics: Array<L1Statistic>): ShowBusinessAssetsStatisticResponse {
        this['subject_area_group_statistics'] = subjectAreaGroupStatistics;
        return this;
    }
    public set subjectAreaGroupStatistics(subjectAreaGroupStatistics: Array<L1Statistic>  | undefined) {
        this['subject_area_group_statistics'] = subjectAreaGroupStatistics;
    }
    public get subjectAreaGroupStatistics(): Array<L1Statistic> | undefined {
        return this['subject_area_group_statistics'];
    }
}