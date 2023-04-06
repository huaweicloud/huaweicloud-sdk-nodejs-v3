import { Snapshot } from './Snapshot';


export class CreateSnapshotRequestBody {
    public snapshot: Snapshot;
    public constructor(snapshot?: any) { 
        this['snapshot'] = snapshot;
    }
    public withSnapshot(snapshot: Snapshot): CreateSnapshotRequestBody {
        this['snapshot'] = snapshot;
        return this;
    }
}