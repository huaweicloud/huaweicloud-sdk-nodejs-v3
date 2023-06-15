import { LiveSnapshotConfig } from './LiveSnapshotConfig';


export class CreateSnapshotConfigRequest {
    public body?: LiveSnapshotConfig;
    public constructor() { 
    }
    public withBody(body: LiveSnapshotConfig): CreateSnapshotConfigRequest {
        this['body'] = body;
        return this;
    }
}