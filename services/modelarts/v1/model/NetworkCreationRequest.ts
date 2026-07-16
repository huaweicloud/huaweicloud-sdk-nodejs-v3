import { NetworkMetadataCreation } from './NetworkMetadataCreation';
import { NetworkSpec } from './NetworkSpec';


export class NetworkCreationRequest {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NetworkMetadataCreation;
    public spec?: NetworkSpec;
    public constructor(apiVersion?: string, kind?: string, metadata?: NetworkMetadataCreation, spec?: NetworkSpec) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): NetworkCreationRequest {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): NetworkCreationRequest {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NetworkMetadataCreation): NetworkCreationRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NetworkSpec): NetworkCreationRequest {
        this['spec'] = spec;
        return this;
    }
}