import { ListBackupsRespBackupList } from './ListBackupsRespBackupList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGraphBackups2Response extends SdkResponse {
    private 'backup_count'?: number;
    private 'backup_list'?: Array<ListBackupsRespBackupList>;
    public constructor() { 
        super();
    }
    public withBackupCount(backupCount: number): ListGraphBackups2Response {
        this['backup_count'] = backupCount;
        return this;
    }
    public set backupCount(backupCount: number  | undefined) {
        this['backup_count'] = backupCount;
    }
    public get backupCount(): number | undefined {
        return this['backup_count'];
    }
    public withBackupList(backupList: Array<ListBackupsRespBackupList>): ListGraphBackups2Response {
        this['backup_list'] = backupList;
        return this;
    }
    public set backupList(backupList: Array<ListBackupsRespBackupList>  | undefined) {
        this['backup_list'] = backupList;
    }
    public get backupList(): Array<ListBackupsRespBackupList> | undefined {
        return this['backup_list'];
    }
}