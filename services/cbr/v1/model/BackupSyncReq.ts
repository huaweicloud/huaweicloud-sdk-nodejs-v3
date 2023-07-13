import { BackupSync } from './BackupSync';


export class BackupSyncReq {
    public sync: Array<BackupSync>;
    public constructor(sync?: any) { 
        this['sync'] = sync;
    }
    public withSync(sync: Array<BackupSync>): BackupSyncReq {
        this['sync'] = sync;
        return this;
    }
}