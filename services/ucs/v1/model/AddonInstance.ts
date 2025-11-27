import { AddonInstanceSpec } from './AddonInstanceSpec';
import { AddonInstanceStatus } from './AddonInstanceStatus';
import { ObjectMeta } from './ObjectMeta';


export class AddonInstance {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: AddonInstanceSpec;
    public status?: AddonInstanceStatus;
    public constructor(kind?: string, apiVersion?: string, metadata?: ObjectMeta) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
    }
    public withKind(kind: string): AddonInstance {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AddonInstance {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): AddonInstance {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AddonInstanceSpec): AddonInstance {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): AddonInstance {
        this['status'] = status;
        return this;
    }
}