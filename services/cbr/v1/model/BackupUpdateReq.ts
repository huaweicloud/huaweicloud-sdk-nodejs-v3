import { BackupUpdate } from './BackupUpdate';


export class BackupUpdateReq {
    public backup?: BackupUpdate;
    public constructor() { 
    }
    public withBackup(backup: BackupUpdate): BackupUpdateReq {
        this['backup'] = backup;
        return this;
    }
}