import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpdateBackupEnhancePolicyResponse extends SdkResponse {
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'manual_backup_retention_days'?: string;
    public frequency?: string;
    public policies?: Array<Policy>;
    public constructor() { 
        super();
    }
    public withBeginTime(beginTime: string): ListUpdateBackupEnhancePolicyResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListUpdateBackupEnhancePolicyResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withManualBackupRetentionDays(manualBackupRetentionDays: string): ListUpdateBackupEnhancePolicyResponse {
        this['manual_backup_retention_days'] = manualBackupRetentionDays;
        return this;
    }
    public set manualBackupRetentionDays(manualBackupRetentionDays: string  | undefined) {
        this['manual_backup_retention_days'] = manualBackupRetentionDays;
    }
    public get manualBackupRetentionDays(): string | undefined {
        return this['manual_backup_retention_days'];
    }
    public withFrequency(frequency: string): ListUpdateBackupEnhancePolicyResponse {
        this['frequency'] = frequency;
        return this;
    }
    public withPolicies(policies: Array<Policy>): ListUpdateBackupEnhancePolicyResponse {
        this['policies'] = policies;
        return this;
    }
}