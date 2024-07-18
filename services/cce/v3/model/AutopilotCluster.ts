import { AutopilotClusterMetadata } from './AutopilotClusterMetadata';
import { AutopilotClusterSpec } from './AutopilotClusterSpec';
import { AutopilotClusterStatus } from './AutopilotClusterStatus';


export class AutopilotCluster {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: AutopilotClusterMetadata;
    public spec?: AutopilotClusterSpec;
    public status?: AutopilotClusterStatus;
    public constructor(kind?: string, apiVersion?: string, metadata?: AutopilotClusterMetadata, spec?: AutopilotClusterSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withKind(kind: string): AutopilotCluster {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): AutopilotCluster {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: AutopilotClusterMetadata): AutopilotCluster {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: AutopilotClusterSpec): AutopilotCluster {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: AutopilotClusterStatus): AutopilotCluster {
        this['status'] = status;
        return this;
    }
}