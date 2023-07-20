import { CreateManualBackupOption } from './CreateManualBackupOption';


export class CreateManualBackupRequestBody {
    public backup?: CreateManualBackupOption;
    public constructor(backup?: CreateManualBackupOption) { 
        this['backup'] = backup;
    }
    public withBackup(backup: CreateManualBackupOption): CreateManualBackupRequestBody {
        this['backup'] = backup;
        return this;
    }
}