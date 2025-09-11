
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditAutoBackupTemplateResponse extends SdkResponse {
    private 'bucket_name'?: string;
    private 'bucket_root_path'?: string;
    public cycle?: string;
    private 'latest_backup_time'?: Date;
    public status?: number;
    private 'trigger_time'?: Date;
    public triggered?: boolean;
    public constructor() { 
        super();
    }
    public withBucketName(bucketName: string): SetAuditAutoBackupTemplateResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withBucketRootPath(bucketRootPath: string): SetAuditAutoBackupTemplateResponse {
        this['bucket_root_path'] = bucketRootPath;
        return this;
    }
    public set bucketRootPath(bucketRootPath: string  | undefined) {
        this['bucket_root_path'] = bucketRootPath;
    }
    public get bucketRootPath(): string | undefined {
        return this['bucket_root_path'];
    }
    public withCycle(cycle: string): SetAuditAutoBackupTemplateResponse {
        this['cycle'] = cycle;
        return this;
    }
    public withLatestBackupTime(latestBackupTime: Date): SetAuditAutoBackupTemplateResponse {
        this['latest_backup_time'] = latestBackupTime;
        return this;
    }
    public set latestBackupTime(latestBackupTime: Date  | undefined) {
        this['latest_backup_time'] = latestBackupTime;
    }
    public get latestBackupTime(): Date | undefined {
        return this['latest_backup_time'];
    }
    public withStatus(status: number): SetAuditAutoBackupTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withTriggerTime(triggerTime: Date): SetAuditAutoBackupTemplateResponse {
        this['trigger_time'] = triggerTime;
        return this;
    }
    public set triggerTime(triggerTime: Date  | undefined) {
        this['trigger_time'] = triggerTime;
    }
    public get triggerTime(): Date | undefined {
        return this['trigger_time'];
    }
    public withTriggered(triggered: boolean): SetAuditAutoBackupTemplateResponse {
        this['triggered'] = triggered;
        return this;
    }
}