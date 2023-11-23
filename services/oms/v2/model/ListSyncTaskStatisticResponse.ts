import { StatisticTypeData } from './StatisticTypeData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSyncTaskStatisticResponse extends SdkResponse {
    private 'sync_task_id'?: string;
    private 'statistic_time_type'?: ListSyncTaskStatisticResponseStatisticTimeTypeEnum | string;
    private 'statistic_datas'?: Array<StatisticTypeData>;
    public constructor() { 
        super();
    }
    public withSyncTaskId(syncTaskId: string): ListSyncTaskStatisticResponse {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
    public withStatisticTimeType(statisticTimeType: ListSyncTaskStatisticResponseStatisticTimeTypeEnum | string): ListSyncTaskStatisticResponse {
        this['statistic_time_type'] = statisticTimeType;
        return this;
    }
    public set statisticTimeType(statisticTimeType: ListSyncTaskStatisticResponseStatisticTimeTypeEnum | string  | undefined) {
        this['statistic_time_type'] = statisticTimeType;
    }
    public get statisticTimeType(): ListSyncTaskStatisticResponseStatisticTimeTypeEnum | string | undefined {
        return this['statistic_time_type'];
    }
    public withStatisticDatas(statisticDatas: Array<StatisticTypeData>): ListSyncTaskStatisticResponse {
        this['statistic_datas'] = statisticDatas;
        return this;
    }
    public set statisticDatas(statisticDatas: Array<StatisticTypeData>  | undefined) {
        this['statistic_datas'] = statisticDatas;
    }
    public get statisticDatas(): Array<StatisticTypeData> | undefined {
        return this['statistic_datas'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSyncTaskStatisticResponseStatisticTimeTypeEnum {
    FIVE_MINUTES = 'FIVE_MINUTES',
    ONE_HOUR = 'ONE_HOUR'
}
