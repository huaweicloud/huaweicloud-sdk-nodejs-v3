
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteManualBackupResponse extends SdkResponse {
    private 'backup_id'?: string;
    private 'backup_name'?: string;
    public constructor() { 
        super();
    }
    public withBackupId(backupId: string): DeleteManualBackupResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): DeleteManualBackupResponse {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
}