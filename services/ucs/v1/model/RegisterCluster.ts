import { RegisterClusterMetadata } from './RegisterClusterMetadata';
import { RegisterClusterSpec } from './RegisterClusterSpec';


export class RegisterCluster {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: RegisterClusterMetadata;
    public spec?: RegisterClusterSpec;
    public constructor(kind?: string, apiVersion?: string, metadata?: RegisterClusterMetadata, spec?: RegisterClusterSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withKind(kind: string): RegisterCluster {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): RegisterCluster {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: RegisterClusterMetadata): RegisterCluster {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: RegisterClusterSpec): RegisterCluster {
        this['spec'] = spec;
        return this;
    }
}