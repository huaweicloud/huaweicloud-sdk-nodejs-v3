import { NodeMetadata } from './NodeMetadata';
import { V3NodeSpec } from './V3NodeSpec';


export class V3NodeCreateRequest {
    public kind: string;
    public apiVersion: string;
    public metadata?: NodeMetadata;
    public spec: V3NodeSpec;
    public constructor(kind?: any, apiVersion?: any, spec?: any) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
    }
    public withKind(kind: string): V3NodeCreateRequest {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): V3NodeCreateRequest {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): V3NodeCreateRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V3NodeSpec): V3NodeCreateRequest {
        this['spec'] = spec;
        return this;
    }
}