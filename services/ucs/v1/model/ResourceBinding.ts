import { ObjectMeta } from './ObjectMeta';
import { ResourceBindingSpec } from './ResourceBindingSpec';
import { ResourceBindingStatus } from './ResourceBindingStatus';


export class ResourceBinding {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: ResourceBindingSpec;
    public status?: ResourceBindingStatus;
    public constructor() { 
    }
    public withKind(kind: string): ResourceBinding {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ResourceBinding {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ResourceBinding {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ResourceBindingSpec): ResourceBinding {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ResourceBindingStatus): ResourceBinding {
        this['status'] = status;
        return this;
    }
}