import { BackupSyncReq } from './BackupSyncReq';


export class ImportBackupRequest {
    public body?: BackupSyncReq;
    public constructor() { 
    }
    public withBody(body: BackupSyncReq): ImportBackupRequest {
        this['body'] = body;
        return this;
    }
}