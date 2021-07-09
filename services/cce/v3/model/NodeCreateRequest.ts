import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';


export class NodeCreateRequest {
    public kind: string;
    public apiVersion: string;
    public metadata?: NodeMetadata;
    public spec: NodeSpec;
    public constructor(kind?: any, apiVersion?: any, spec?: any) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
    }
    public withKind(kind: string): NodeCreateRequest {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): NodeCreateRequest {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): NodeCreateRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeSpec): NodeCreateRequest {
        this['spec'] = spec;
        return this;
    }
}