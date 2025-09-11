import { AlarmLevelStatisticsResult } from './AlarmLevelStatisticsResult';


export class InstanceAlarmLevelStatisticResult {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'total_count'?: number;
    private 'alarm_level_statistics'?: Array<AlarmLevelStatisticsResult>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceAlarmLevelStatisticResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstanceAlarmLevelStatisticResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withTotalCount(totalCount: number): InstanceAlarmLevelStatisticResult {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withAlarmLevelStatistics(alarmLevelStatistics: Array<AlarmLevelStatisticsResult>): InstanceAlarmLevelStatisticResult {
        this['alarm_level_statistics'] = alarmLevelStatistics;
        return this;
    }
    public set alarmLevelStatistics(alarmLevelStatistics: Array<AlarmLevelStatisticsResult>  | undefined) {
        this['alarm_level_statistics'] = alarmLevelStatistics;
    }
    public get alarmLevelStatistics(): Array<AlarmLevelStatisticsResult> | undefined {
        return this['alarm_level_statistics'];
    }
}