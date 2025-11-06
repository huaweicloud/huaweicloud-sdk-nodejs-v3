import { AlarmRulesItemsDetails } from './AlarmRulesItemsDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryAlarmRulesResponse extends SdkResponse {
    private 'alarm_rules_items_details'?: Array<AlarmRulesItemsDetails>;
    private 'assurance_mission_commitment_time_not_completed_count'?: number;
    private 'assurance_mission_failed_count'?: number;
    private 'assurance_mission_warning_time_not_completed_count'?: number;
    private 'baseline_error_count'?: number;
    private 'cancel_jobs_count'?: number;
    private 'exception_count'?: number;
    private 'modify_count'?: number;
    private 'multi_period_unfinished_count'?: number;
    private 'overload_count'?: number;
    private 'recover_jobs_count'?: number;
    private 'success_count'?: number;
    public total?: number;
    private 'total_all'?: number;
    private 'unfinished_count'?: number;
    public constructor() { 
        super();
    }
    public withAlarmRulesItemsDetails(alarmRulesItemsDetails: Array<AlarmRulesItemsDetails>): ListFactoryAlarmRulesResponse {
        this['alarm_rules_items_details'] = alarmRulesItemsDetails;
        return this;
    }
    public set alarmRulesItemsDetails(alarmRulesItemsDetails: Array<AlarmRulesItemsDetails>  | undefined) {
        this['alarm_rules_items_details'] = alarmRulesItemsDetails;
    }
    public get alarmRulesItemsDetails(): Array<AlarmRulesItemsDetails> | undefined {
        return this['alarm_rules_items_details'];
    }
    public withAssuranceMissionCommitmentTimeNotCompletedCount(assuranceMissionCommitmentTimeNotCompletedCount: number): ListFactoryAlarmRulesResponse {
        this['assurance_mission_commitment_time_not_completed_count'] = assuranceMissionCommitmentTimeNotCompletedCount;
        return this;
    }
    public set assuranceMissionCommitmentTimeNotCompletedCount(assuranceMissionCommitmentTimeNotCompletedCount: number  | undefined) {
        this['assurance_mission_commitment_time_not_completed_count'] = assuranceMissionCommitmentTimeNotCompletedCount;
    }
    public get assuranceMissionCommitmentTimeNotCompletedCount(): number | undefined {
        return this['assurance_mission_commitment_time_not_completed_count'];
    }
    public withAssuranceMissionFailedCount(assuranceMissionFailedCount: number): ListFactoryAlarmRulesResponse {
        this['assurance_mission_failed_count'] = assuranceMissionFailedCount;
        return this;
    }
    public set assuranceMissionFailedCount(assuranceMissionFailedCount: number  | undefined) {
        this['assurance_mission_failed_count'] = assuranceMissionFailedCount;
    }
    public get assuranceMissionFailedCount(): number | undefined {
        return this['assurance_mission_failed_count'];
    }
    public withAssuranceMissionWarningTimeNotCompletedCount(assuranceMissionWarningTimeNotCompletedCount: number): ListFactoryAlarmRulesResponse {
        this['assurance_mission_warning_time_not_completed_count'] = assuranceMissionWarningTimeNotCompletedCount;
        return this;
    }
    public set assuranceMissionWarningTimeNotCompletedCount(assuranceMissionWarningTimeNotCompletedCount: number  | undefined) {
        this['assurance_mission_warning_time_not_completed_count'] = assuranceMissionWarningTimeNotCompletedCount;
    }
    public get assuranceMissionWarningTimeNotCompletedCount(): number | undefined {
        return this['assurance_mission_warning_time_not_completed_count'];
    }
    public withBaselineErrorCount(baselineErrorCount: number): ListFactoryAlarmRulesResponse {
        this['baseline_error_count'] = baselineErrorCount;
        return this;
    }
    public set baselineErrorCount(baselineErrorCount: number  | undefined) {
        this['baseline_error_count'] = baselineErrorCount;
    }
    public get baselineErrorCount(): number | undefined {
        return this['baseline_error_count'];
    }
    public withCancelJobsCount(cancelJobsCount: number): ListFactoryAlarmRulesResponse {
        this['cancel_jobs_count'] = cancelJobsCount;
        return this;
    }
    public set cancelJobsCount(cancelJobsCount: number  | undefined) {
        this['cancel_jobs_count'] = cancelJobsCount;
    }
    public get cancelJobsCount(): number | undefined {
        return this['cancel_jobs_count'];
    }
    public withExceptionCount(exceptionCount: number): ListFactoryAlarmRulesResponse {
        this['exception_count'] = exceptionCount;
        return this;
    }
    public set exceptionCount(exceptionCount: number  | undefined) {
        this['exception_count'] = exceptionCount;
    }
    public get exceptionCount(): number | undefined {
        return this['exception_count'];
    }
    public withModifyCount(modifyCount: number): ListFactoryAlarmRulesResponse {
        this['modify_count'] = modifyCount;
        return this;
    }
    public set modifyCount(modifyCount: number  | undefined) {
        this['modify_count'] = modifyCount;
    }
    public get modifyCount(): number | undefined {
        return this['modify_count'];
    }
    public withMultiPeriodUnfinishedCount(multiPeriodUnfinishedCount: number): ListFactoryAlarmRulesResponse {
        this['multi_period_unfinished_count'] = multiPeriodUnfinishedCount;
        return this;
    }
    public set multiPeriodUnfinishedCount(multiPeriodUnfinishedCount: number  | undefined) {
        this['multi_period_unfinished_count'] = multiPeriodUnfinishedCount;
    }
    public get multiPeriodUnfinishedCount(): number | undefined {
        return this['multi_period_unfinished_count'];
    }
    public withOverloadCount(overloadCount: number): ListFactoryAlarmRulesResponse {
        this['overload_count'] = overloadCount;
        return this;
    }
    public set overloadCount(overloadCount: number  | undefined) {
        this['overload_count'] = overloadCount;
    }
    public get overloadCount(): number | undefined {
        return this['overload_count'];
    }
    public withRecoverJobsCount(recoverJobsCount: number): ListFactoryAlarmRulesResponse {
        this['recover_jobs_count'] = recoverJobsCount;
        return this;
    }
    public set recoverJobsCount(recoverJobsCount: number  | undefined) {
        this['recover_jobs_count'] = recoverJobsCount;
    }
    public get recoverJobsCount(): number | undefined {
        return this['recover_jobs_count'];
    }
    public withSuccessCount(successCount: number): ListFactoryAlarmRulesResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withTotal(total: number): ListFactoryAlarmRulesResponse {
        this['total'] = total;
        return this;
    }
    public withTotalAll(totalAll: number): ListFactoryAlarmRulesResponse {
        this['total_all'] = totalAll;
        return this;
    }
    public set totalAll(totalAll: number  | undefined) {
        this['total_all'] = totalAll;
    }
    public get totalAll(): number | undefined {
        return this['total_all'];
    }
    public withUnfinishedCount(unfinishedCount: number): ListFactoryAlarmRulesResponse {
        this['unfinished_count'] = unfinishedCount;
        return this;
    }
    public set unfinishedCount(unfinishedCount: number  | undefined) {
        this['unfinished_count'] = unfinishedCount;
    }
    public get unfinishedCount(): number | undefined {
        return this['unfinished_count'];
    }
}