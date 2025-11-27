import { ObjectMeta } from './ObjectMeta';
import { PodSpec } from './PodSpec';
import { PodStatus } from './PodStatus';


export class Pod {
    public metadata?: ObjectMeta;
    public spec?: PodSpec;
    public status?: PodStatus;
    public constructor() { 
    }
    public withMetadata(metadata: ObjectMeta): Pod {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PodSpec): Pod {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PodStatus): Pod {
        this['status'] = status;
        return this;
    }
}