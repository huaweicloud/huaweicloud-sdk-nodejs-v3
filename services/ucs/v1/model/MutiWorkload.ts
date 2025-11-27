import { ObjectMeta } from './ObjectMeta';
import { OverridePolicy } from './OverridePolicy';
import { PropagationPolicy } from './PropagationPolicy';
import { ResourceBinding } from './ResourceBinding';


export class MutiWorkload {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public template?: object;
    public propagationPolicy?: PropagationPolicy;
    public overridePolicy?: OverridePolicy;
    public resourceBinding?: ResourceBinding;
    public constructor() { 
    }
    public withKind(kind: string): MutiWorkload {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): MutiWorkload {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): MutiWorkload {
        this['metadata'] = metadata;
        return this;
    }
    public withTemplate(template: object): MutiWorkload {
        this['template'] = template;
        return this;
    }
    public withPropagationPolicy(propagationPolicy: PropagationPolicy): MutiWorkload {
        this['propagationPolicy'] = propagationPolicy;
        return this;
    }
    public withOverridePolicy(overridePolicy: OverridePolicy): MutiWorkload {
        this['overridePolicy'] = overridePolicy;
        return this;
    }
    public withResourceBinding(resourceBinding: ResourceBinding): MutiWorkload {
        this['resourceBinding'] = resourceBinding;
        return this;
    }
}