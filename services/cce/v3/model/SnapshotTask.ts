import { SnapshotSpec } from './SnapshotSpec';
import { SnapshotStatus } from './SnapshotStatus';
import { SnapshotTaskMetadata } from './SnapshotTaskMetadata';


export class SnapshotTask {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: SnapshotTaskMetadata;
    public spec?: SnapshotSpec;
    public status?: SnapshotStatus;
    public constructor() { 
    }
    public withKind(kind: string): SnapshotTask {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): SnapshotTask {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: SnapshotTaskMetadata): SnapshotTask {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: SnapshotSpec): SnapshotTask {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: SnapshotStatus): SnapshotTask {
        this['status'] = status;
        return this;
    }
}