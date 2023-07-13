import { BackupRestore } from './BackupRestore';


export class BackupRestoreReq {
    public restore: BackupRestore;
    public constructor(restore?: any) { 
        this['restore'] = restore;
    }
    public withRestore(restore: BackupRestore): BackupRestoreReq {
        this['restore'] = restore;
        return this;
    }
}