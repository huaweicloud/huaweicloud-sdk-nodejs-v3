import { CreateSnapshotOption } from './CreateSnapshotOption';


export class CreateSnapshotRequestBody {
    public snapshot: CreateSnapshotOption;
    public constructor(snapshot?: any) { 
        this['snapshot'] = snapshot;
    }
    public withSnapshot(snapshot: CreateSnapshotOption): CreateSnapshotRequestBody {
        this['snapshot'] = snapshot;
        return this;
    }
}