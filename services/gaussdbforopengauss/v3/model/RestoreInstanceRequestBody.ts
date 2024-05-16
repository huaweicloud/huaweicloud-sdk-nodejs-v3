import { RecoveryBackupSource } from './RecoveryBackupSource';
import { RecoveryBackupTarget } from './RecoveryBackupTarget';


export class RestoreInstanceRequestBody {
    public source?: RecoveryBackupSource;
    public target?: RecoveryBackupTarget;
    public constructor(source?: RecoveryBackupSource, target?: RecoveryBackupTarget) { 
        this['source'] = source;
        this['target'] = target;
    }
    public withSource(source: RecoveryBackupSource): RestoreInstanceRequestBody {
        this['source'] = source;
        return this;
    }
    public withTarget(target: RecoveryBackupTarget): RestoreInstanceRequestBody {
        this['target'] = target;
        return this;
    }
}