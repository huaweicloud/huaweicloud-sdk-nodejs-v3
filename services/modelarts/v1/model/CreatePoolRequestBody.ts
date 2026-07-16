import { PoolMetadataCreation } from './PoolMetadataCreation';
import { PoolSpecCreation } from './PoolSpecCreation';


export class CreatePoolRequestBody {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PoolMetadataCreation;
    public spec?: PoolSpecCreation;
    public constructor(apiVersion?: string, kind?: string, metadata?: PoolMetadataCreation) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withApiVersion(apiVersion: string): CreatePoolRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreatePoolRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PoolMetadataCreation): CreatePoolRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PoolSpecCreation): CreatePoolRequestBody {
        this['spec'] = spec;
        return this;
    }
}