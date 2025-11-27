import { ObjectMeta } from './ObjectMeta';
import { PropagationSpec } from './PropagationSpec';


export class PropagationPolicy {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: PropagationSpec;
    public constructor() { 
    }
    public withKind(kind: string): PropagationPolicy {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): PropagationPolicy {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): PropagationPolicy {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PropagationSpec): PropagationPolicy {
        this['spec'] = spec;
        return this;
    }
}