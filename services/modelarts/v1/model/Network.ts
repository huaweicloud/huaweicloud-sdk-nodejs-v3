import { NetworkMetadata } from './NetworkMetadata';
import { NetworkSpec } from './NetworkSpec';
import { NetworkStatus } from './NetworkStatus';


export class Network {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NetworkMetadata;
    public spec?: NetworkSpec;
    public status?: NetworkStatus;
    public constructor(apiVersion?: string, kind?: string, metadata?: NetworkMetadata, spec?: NetworkSpec) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): Network {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): Network {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NetworkMetadata): Network {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NetworkSpec): Network {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NetworkStatus): Network {
        this['status'] = status;
        return this;
    }
}