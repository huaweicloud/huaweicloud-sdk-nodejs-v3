import { BackupInfoResp } from './BackupInfoResp';
import { BackupJobBaseInfo } from './BackupJobBaseInfo';
import { BackupJobEndpointInfo } from './BackupJobEndpointInfo';
import { BackupRestoreOptionInfo } from './BackupRestoreOptionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplicationJobResponse extends SdkResponse {
    public id?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'finish_time'?: string;
    private 'backup_info'?: BackupInfoResp;
    private 'base_info'?: BackupJobBaseInfo;
    private 'target_db_info'?: BackupJobEndpointInfo;
    public options?: BackupRestoreOptionInfo;
    private 'new_db_names'?: string;
    private 'instance_name'?: string;
    private 'error_log'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowReplicationJobResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ShowReplicationJobResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ShowReplicationJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withFinishTime(finishTime: string): ShowReplicationJobResponse {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string  | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime(): string | undefined {
        return this['finish_time'];
    }
    public withBackupInfo(backupInfo: BackupInfoResp): ShowReplicationJobResponse {
        this['backup_info'] = backupInfo;
        return this;
    }
    public set backupInfo(backupInfo: BackupInfoResp  | undefined) {
        this['backup_info'] = backupInfo;
    }
    public get backupInfo(): BackupInfoResp | undefined {
        return this['backup_info'];
    }
    public withBaseInfo(baseInfo: BackupJobBaseInfo): ShowReplicationJobResponse {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: BackupJobBaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): BackupJobBaseInfo | undefined {
        return this['base_info'];
    }
    public withTargetDbInfo(targetDbInfo: BackupJobEndpointInfo): ShowReplicationJobResponse {
        this['target_db_info'] = targetDbInfo;
        return this;
    }
    public set targetDbInfo(targetDbInfo: BackupJobEndpointInfo  | undefined) {
        this['target_db_info'] = targetDbInfo;
    }
    public get targetDbInfo(): BackupJobEndpointInfo | undefined {
        return this['target_db_info'];
    }
    public withOptions(options: BackupRestoreOptionInfo): ShowReplicationJobResponse {
        this['options'] = options;
        return this;
    }
    public withNewDbNames(newDbNames: string): ShowReplicationJobResponse {
        this['new_db_names'] = newDbNames;
        return this;
    }
    public set newDbNames(newDbNames: string  | undefined) {
        this['new_db_names'] = newDbNames;
    }
    public get newDbNames(): string | undefined {
        return this['new_db_names'];
    }
    public withInstanceName(instanceName: string): ShowReplicationJobResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withErrorLog(errorLog: string): ShowReplicationJobResponse {
        this['error_log'] = errorLog;
        return this;
    }
    public set errorLog(errorLog: string  | undefined) {
        this['error_log'] = errorLog;
    }
    public get errorLog(): string | undefined {
        return this['error_log'];
    }
}