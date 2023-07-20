import { RollbackSnapshotOption } from './RollbackSnapshotOption';


export class RollbackSnapshotRequestBody {
    public rollback?: RollbackSnapshotOption;
    public constructor(rollback?: RollbackSnapshotOption) { 
        this['rollback'] = rollback;
    }
    public withRollback(rollback: RollbackSnapshotOption): RollbackSnapshotRequestBody {
        this['rollback'] = rollback;
        return this;
    }
}