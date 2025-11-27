import { RegisterClusterGroupObjectMeta } from './RegisterClusterGroupObjectMeta';
import { RegisterClusterGroupSpec } from './RegisterClusterGroupSpec';


export class RegisterClusterGroup {
    public metadata?: RegisterClusterGroupObjectMeta;
    public spec?: RegisterClusterGroupSpec;
    public constructor(metadata?: RegisterClusterGroupObjectMeta) { 
        this['metadata'] = metadata;
    }
    public withMetadata(metadata: RegisterClusterGroupObjectMeta): RegisterClusterGroup {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: RegisterClusterGroupSpec): RegisterClusterGroup {
        this['spec'] = spec;
        return this;
    }
}