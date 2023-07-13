import { LiveSnapshotConfig } from './LiveSnapshotConfig';


export class UpdateSnapshotConfigRequest {
    public body?: LiveSnapshotConfig;
    public constructor() { 
    }
    public withBody(body: LiveSnapshotConfig): UpdateSnapshotConfigRequest {
        this['body'] = body;
        return this;
    }
}