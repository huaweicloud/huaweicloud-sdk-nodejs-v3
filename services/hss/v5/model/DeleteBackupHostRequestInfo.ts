

export class DeleteBackupHostRequestInfo {
    private 'backup_host_id_list'?: Array<string>;
    public constructor(backupHostIdList?: Array<string>) { 
        this['backup_host_id_list'] = backupHostIdList;
    }
    public withBackupHostIdList(backupHostIdList: Array<string>): DeleteBackupHostRequestInfo {
        this['backup_host_id_list'] = backupHostIdList;
        return this;
    }
    public set backupHostIdList(backupHostIdList: Array<string>  | undefined) {
        this['backup_host_id_list'] = backupHostIdList;
    }
    public get backupHostIdList(): Array<string> | undefined {
        return this['backup_host_id_list'];
    }
}