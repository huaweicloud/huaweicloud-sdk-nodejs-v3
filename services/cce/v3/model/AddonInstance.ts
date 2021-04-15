import { AddonInstanceStatus } from './AddonInstanceStatus';
import { InstanceSpec } from './InstanceSpec';
import { Metadata } from './Metadata';


export class AddonInstance {
    public apiVersion: string;
    public kind: string;
    public metadata?: Metadata;
    public spec: InstanceSpec;
    public status: AddonInstanceStatus;
    public constructor(apiVersion?: any, kind?: any, spec?: any, status?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
        this['status'] = status;
    }
    public withApiVersion(apiVersion: string): AddonInstance {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): AddonInstance {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): AddonInstance {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: InstanceSpec): AddonInstance {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AddonInstanceStatus): AddonInstance {
        this['status'] = status;
        return this;
    }
}