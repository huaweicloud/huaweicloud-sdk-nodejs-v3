import { UpgradeClusterRequestMetadata } from './UpgradeClusterRequestMetadata';
import { UpgradeSpec } from './UpgradeSpec';


export class UpgradeClusterRequestBody {
    public metadata: UpgradeClusterRequestMetadata;
    public spec: UpgradeSpec;
    public constructor(metadata?: any, spec?: any) { 
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withMetadata(metadata: UpgradeClusterRequestMetadata): UpgradeClusterRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpgradeSpec): UpgradeClusterRequestBody {
        this['spec'] = spec;
        return this;
    }
}