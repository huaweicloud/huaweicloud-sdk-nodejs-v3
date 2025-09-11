import { AlarmLevelStatisticsResult } from './AlarmLevelStatisticsResult';
import { InstanceAlarmLevelStatisticResult } from './InstanceAlarmLevelStatisticResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmStatisticsResponse extends SdkResponse {
    private 'total_alarm_count'?: number;
    private 'ring_percentage'?: number;
    private 'instance_alarm_level_statistics'?: Array<InstanceAlarmLevelStatisticResult>;
    private 'total_alarm_level_statistics'?: Array<AlarmLevelStatisticsResult>;
    public constructor() { 
        super();
    }
    public withTotalAlarmCount(totalAlarmCount: number): ShowAlarmStatisticsResponse {
        this['total_alarm_count'] = totalAlarmCount;
        return this;
    }
    public set totalAlarmCount(totalAlarmCount: number  | undefined) {
        this['total_alarm_count'] = totalAlarmCount;
    }
    public get totalAlarmCount(): number | undefined {
        return this['total_alarm_count'];
    }
    public withRingPercentage(ringPercentage: number): ShowAlarmStatisticsResponse {
        this['ring_percentage'] = ringPercentage;
        return this;
    }
    public set ringPercentage(ringPercentage: number  | undefined) {
        this['ring_percentage'] = ringPercentage;
    }
    public get ringPercentage(): number | undefined {
        return this['ring_percentage'];
    }
    public withInstanceAlarmLevelStatistics(instanceAlarmLevelStatistics: Array<InstanceAlarmLevelStatisticResult>): ShowAlarmStatisticsResponse {
        this['instance_alarm_level_statistics'] = instanceAlarmLevelStatistics;
        return this;
    }
    public set instanceAlarmLevelStatistics(instanceAlarmLevelStatistics: Array<InstanceAlarmLevelStatisticResult>  | undefined) {
        this['instance_alarm_level_statistics'] = instanceAlarmLevelStatistics;
    }
    public get instanceAlarmLevelStatistics(): Array<InstanceAlarmLevelStatisticResult> | undefined {
        return this['instance_alarm_level_statistics'];
    }
    public withTotalAlarmLevelStatistics(totalAlarmLevelStatistics: Array<AlarmLevelStatisticsResult>): ShowAlarmStatisticsResponse {
        this['total_alarm_level_statistics'] = totalAlarmLevelStatistics;
        return this;
    }
    public set totalAlarmLevelStatistics(totalAlarmLevelStatistics: Array<AlarmLevelStatisticsResult>  | undefined) {
        this['total_alarm_level_statistics'] = totalAlarmLevelStatistics;
    }
    public get totalAlarmLevelStatistics(): Array<AlarmLevelStatisticsResult> | undefined {
        return this['total_alarm_level_statistics'];
    }
}