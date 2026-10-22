import { RollbackSnapshotRequestBodyNew } from './RollbackSnapshotRequestBodyNew';


export class RollbackSnapshotRequestBodyV5 {
    public rollback?: RollbackSnapshotRequestBodyNew;
    public constructor(rollback?: RollbackSnapshotRequestBodyNew) { 
        this['rollback'] = rollback;
    }
    public withRollback(rollback: RollbackSnapshotRequestBodyNew): RollbackSnapshotRequestBodyV5 {
        this['rollback'] = rollback;
        return this;
    }
}