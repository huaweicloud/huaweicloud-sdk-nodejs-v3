import { ClusterConfigurationsSpec } from './ClusterConfigurationsSpec';
import { ConfigurationMetadata } from './ConfigurationMetadata';


export class UpdateClusterConfigurationsBody {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ConfigurationMetadata;
    public spec?: ClusterConfigurationsSpec;
    public constructor(apiVersion?: string, kind?: string, metadata?: ConfigurationMetadata, spec?: ClusterConfigurationsSpec) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): UpdateClusterConfigurationsBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): UpdateClusterConfigurationsBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ConfigurationMetadata): UpdateClusterConfigurationsBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterConfigurationsSpec): UpdateClusterConfigurationsBody {
        this['spec'] = spec;
        return this;
    }
}