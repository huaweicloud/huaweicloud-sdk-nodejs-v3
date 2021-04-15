import { NodeMetadata } from './NodeMetadata';
import { V3NodeSpec } from './V3NodeSpec';


export class V3NodeCreateRequest {
    public apiVersion: string;
    public kind: string;
    public metadata?: NodeMetadata;
    public spec: V3NodeSpec;
    public constructor(apiVersion?: any, kind?: any, spec?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): V3NodeCreateRequest {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): V3NodeCreateRequest {
        this['kind'] = kind;
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