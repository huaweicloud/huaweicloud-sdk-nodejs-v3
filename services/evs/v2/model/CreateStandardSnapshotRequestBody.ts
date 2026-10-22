import { CreateStandardSnapshot } from './CreateStandardSnapshot';


export class CreateStandardSnapshotRequestBody {
    public snapshot?: CreateStandardSnapshot;
    public constructor(snapshot?: CreateStandardSnapshot) { 
        this['snapshot'] = snapshot;
    }
    public withSnapshot(snapshot: CreateStandardSnapshot): CreateStandardSnapshotRequestBody {
        this['snapshot'] = snapshot;
        return this;
    }
}