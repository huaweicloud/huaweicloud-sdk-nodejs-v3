
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulBackupStatisticsResponse extends SdkResponse {
    private 'backup_info_id'?: string;
    private 'backup_host_num'?: number;
    private 'unable_backup_host_num'?: number;
    public constructor() { 
        super();
    }
    public withBackupInfoId(backupInfoId: string): ShowVulBackupStatisticsResponse {
        this['backup_info_id'] = backupInfoId;
        return this;
    }
    public set backupInfoId(backupInfoId: string  | undefined) {
        this['backup_info_id'] = backupInfoId;
    }
    public get backupInfoId(): string | undefined {
        return this['backup_info_id'];
    }
    public withBackupHostNum(backupHostNum: number): ShowVulBackupStatisticsResponse {
        this['backup_host_num'] = backupHostNum;
        return this;
    }
    public set backupHostNum(backupHostNum: number  | undefined) {
        this['backup_host_num'] = backupHostNum;
    }
    public get backupHostNum(): number | undefined {
        return this['backup_host_num'];
    }
    public withUnableBackupHostNum(unableBackupHostNum: number): ShowVulBackupStatisticsResponse {
        this['unable_backup_host_num'] = unableBackupHostNum;
        return this;
    }
    public set unableBackupHostNum(unableBackupHostNum: number  | undefined) {
        this['unable_backup_host_num'] = unableBackupHostNum;
    }
    public get unableBackupHostNum(): number | undefined {
        return this['unable_backup_host_num'];
    }
}