import { UpgradeTaskMetadata } from './UpgradeTaskMetadata';
import { UpgradeTaskSpec } from './UpgradeTaskSpec';
import { UpgradeTaskStatus } from './UpgradeTaskStatus';


export class UpgradeTaskResponseBody {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: UpgradeTaskMetadata;
    public spec?: UpgradeTaskSpec;
    public status?: UpgradeTaskStatus;
    public constructor() { 
    }
    public withApiVersion(apiVersion: string): UpgradeTaskResponseBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): UpgradeTaskResponseBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: UpgradeTaskMetadata): UpgradeTaskResponseBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeTaskSpec): UpgradeTaskResponseBody {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: UpgradeTaskStatus): UpgradeTaskResponseBody {
        this['status'] = status;
        return this;
    }
}