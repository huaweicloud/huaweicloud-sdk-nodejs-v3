import { DownloadBackupFilesReq } from './DownloadBackupFilesReq';


export class ListBackupFileLinksRequest {
    private 'instance_id': string | undefined;
    private 'backup_id': string | undefined;
    public body?: DownloadBackupFilesReq;
    public constructor(instanceId?: any, backupId?: any) { 
        this['instance_id'] = instanceId;
        this['backup_id'] = backupId;
    }
    public withInstanceId(instanceId: string): ListBackupFileLinksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBackupId(backupId: string): ListBackupFileLinksRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withBody(body: DownloadBackupFilesReq): ListBackupFileLinksRequest {
        this['body'] = body;
        return this;
    }
}