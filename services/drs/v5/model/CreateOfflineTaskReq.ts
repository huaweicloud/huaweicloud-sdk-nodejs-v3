import { BackupInfo } from './BackupInfo';
import { BackupJobBaseInfo } from './BackupJobBaseInfo';
import { BackupJobEndpointInfo } from './BackupJobEndpointInfo';
import { BackupRestoreOptionInfo } from './BackupRestoreOptionInfo';


export class CreateOfflineTaskReq {
    private 'base_info'?: BackupJobBaseInfo;
    private 'target_db_info'?: BackupJobEndpointInfo;
    private 'backup_info'?: BackupInfo;
    public options?: BackupRestoreOptionInfo;
    public constructor(baseInfo?: BackupJobBaseInfo, targetDbInfo?: BackupJobEndpointInfo, backupInfo?: BackupInfo, options?: BackupRestoreOptionInfo) { 
        this['base_info'] = baseInfo;
        this['target_db_info'] = targetDbInfo;
        this['backup_info'] = backupInfo;
        this['options'] = options;
    }
    public withBaseInfo(baseInfo: BackupJobBaseInfo): CreateOfflineTaskReq {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: BackupJobBaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): BackupJobBaseInfo | undefined {
        return this['base_info'];
    }
    public withTargetDbInfo(targetDbInfo: BackupJobEndpointInfo): CreateOfflineTaskReq {
        this['target_db_info'] = targetDbInfo;
        return this;
    }
    public set targetDbInfo(targetDbInfo: BackupJobEndpointInfo  | undefined) {
        this['target_db_info'] = targetDbInfo;
    }
    public get targetDbInfo(): BackupJobEndpointInfo | undefined {
        return this['target_db_info'];
    }
    public withBackupInfo(backupInfo: BackupInfo): CreateOfflineTaskReq {
        this['backup_info'] = backupInfo;
        return this;
    }
    public set backupInfo(backupInfo: BackupInfo  | undefined) {
        this['backup_info'] = backupInfo;
    }
    public get backupInfo(): BackupInfo | undefined {
        return this['backup_info'];
    }
    public withOptions(options: BackupRestoreOptionInfo): CreateOfflineTaskReq {
        this['options'] = options;
        return this;
    }
}