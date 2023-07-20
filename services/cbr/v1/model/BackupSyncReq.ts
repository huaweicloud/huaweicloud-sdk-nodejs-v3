import { BackupSync } from './BackupSync';


export class BackupSyncReq {
    public sync?: Array<BackupSync>;
    public constructor(sync?: Array<BackupSync>) { 
        this['sync'] = sync;
    }
    public withSync(sync: Array<BackupSync>): BackupSyncReq {
        this['sync'] = sync;
        return this;
    }
}