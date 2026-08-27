import { BackupPolicyInfo } from './BackupPolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaurusDbAdvancedBackupPolicyResponse extends SdkResponse {
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'retention_num_backup_level1'?: number;
    public policies?: Array<BackupPolicyInfo>;
    public constructor() { 
        super();
    }
    public withBeginTime(beginTime: string): ShowTaurusDbAdvancedBackupPolicyResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowTaurusDbAdvancedBackupPolicyResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRetentionNumBackupLevel1(retentionNumBackupLevel1: number): ShowTaurusDbAdvancedBackupPolicyResponse {
        this['retention_num_backup_level1'] = retentionNumBackupLevel1;
        return this;
    }
    public set retentionNumBackupLevel1(retentionNumBackupLevel1: number  | undefined) {
        this['retention_num_backup_level1'] = retentionNumBackupLevel1;
    }
    public get retentionNumBackupLevel1(): number | undefined {
        return this['retention_num_backup_level1'];
    }
    public withPolicies(policies: Array<BackupPolicyInfo>): ShowTaurusDbAdvancedBackupPolicyResponse {
        this['policies'] = policies;
        return this;
    }
}