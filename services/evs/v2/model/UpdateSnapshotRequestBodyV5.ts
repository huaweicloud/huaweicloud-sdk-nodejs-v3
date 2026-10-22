import { CinderUpdateSnapshotOptionV5 } from './CinderUpdateSnapshotOptionV5';


export class UpdateSnapshotRequestBodyV5 {
    public snapshot?: CinderUpdateSnapshotOptionV5;
    public constructor(snapshot?: CinderUpdateSnapshotOptionV5) { 
        this['snapshot'] = snapshot;
    }
    public withSnapshot(snapshot: CinderUpdateSnapshotOptionV5): UpdateSnapshotRequestBodyV5 {
        this['snapshot'] = snapshot;
        return this;
    }
}