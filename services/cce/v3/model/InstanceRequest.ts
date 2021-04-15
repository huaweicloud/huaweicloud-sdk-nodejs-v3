import { InstanceRequestSpec } from './InstanceRequestSpec';
import { Metadata } from './Metadata';


export class InstanceRequest {
    public apiVersion: string;
    public kind: string;
    public metadata: Metadata;
    public spec: InstanceRequestSpec;
    public constructor(apiVersion?: any, kind?: any, metadata?: any, spec?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: string): InstanceRequest {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): InstanceRequest {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: Metadata): InstanceRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: InstanceRequestSpec): InstanceRequest {
        this['spec'] = spec;
        return this;
    }
}