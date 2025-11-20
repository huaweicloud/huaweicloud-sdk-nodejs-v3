import { CheckTaskMetadata } from './CheckTaskMetadata';
import { CheckTaskSpec } from './CheckTaskSpec';
import { CheckTaskStatus } from './CheckTaskStatus';


export class AddonCheckTask {
    public metadata?: CheckTaskMetadata;
    public spec?: CheckTaskSpec;
    public status?: CheckTaskStatus;
    public constructor(metadata?: CheckTaskMetadata, status?: CheckTaskStatus) { 
        this['metadata'] = metadata;
        this['status'] = status;
    }
    public withMetadata(metadata: CheckTaskMetadata): AddonCheckTask {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CheckTaskSpec): AddonCheckTask {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: CheckTaskStatus): AddonCheckTask {
        this['status'] = status;
        return this;
    }
}