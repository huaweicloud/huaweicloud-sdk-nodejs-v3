import { PolicyInfo } from './PolicyInfo';


export class MysqlBackupPolicyInfo {
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'retention_num_backup_level1'?: number;
    public policies?: Array<PolicyInfo>;
    public constructor(beginTime?: string, endTime?: string, policies?: Array<PolicyInfo>) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['policies'] = policies;
    }
    public withBeginTime(beginTime: string): MysqlBackupPolicyInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): MysqlBackupPolicyInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRetentionNumBackupLevel1(retentionNumBackupLevel1: number): MysqlBackupPolicyInfo {
        this['retention_num_backup_level1'] = retentionNumBackupLevel1;
        return this;
    }
    public set retentionNumBackupLevel1(retentionNumBackupLevel1: number  | undefined) {
        this['retention_num_backup_level1'] = retentionNumBackupLevel1;
    }
    public get retentionNumBackupLevel1(): number | undefined {
        return this['retention_num_backup_level1'];
    }
    public withPolicies(policies: Array<PolicyInfo>): MysqlBackupPolicyInfo {
        this['policies'] = policies;
        return this;
    }
}