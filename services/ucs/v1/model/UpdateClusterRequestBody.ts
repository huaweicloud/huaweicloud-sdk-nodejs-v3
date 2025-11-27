import { UpdateClusterSpec } from './UpdateClusterSpec';
import { UpdateObjectMeta } from './UpdateObjectMeta';


export class UpdateClusterRequestBody {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: UpdateObjectMeta;
    public spec?: UpdateClusterSpec;
    public constructor(kind?: string, apiVersion?: string) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
    }
    public withKind(kind: string): UpdateClusterRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdateClusterRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: UpdateObjectMeta): UpdateClusterRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpdateClusterSpec): UpdateClusterRequestBody {
        this['spec'] = spec;
        return this;
    }
}