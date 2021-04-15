import { UpdateSnapshotOption } from './UpdateSnapshotOption';


export class UpdateSnapshotRequestBody {
    public snapshot: UpdateSnapshotOption;
    public constructor(snapshot?: any) { 
        this['snapshot'] = snapshot;
    }
    public withSnapshot(snapshot: UpdateSnapshotOption): UpdateSnapshotRequestBody {
        this['snapshot'] = snapshot;
        return this;
    }
}