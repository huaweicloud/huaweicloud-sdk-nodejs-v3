import { CreateNodePoolMetaVO } from './CreateNodePoolMetaVO';
import { NodePoolSpec } from './NodePoolSpec';


export class CreateNodePoolRequestBody {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: CreateNodePoolMetaVO;
    public spec?: NodePoolSpec;
    public constructor(apiVersion?: string, kind?: string, metadata?: CreateNodePoolMetaVO) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withApiVersion(apiVersion: string): CreateNodePoolRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreateNodePoolRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateNodePoolMetaVO): CreateNodePoolRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): CreateNodePoolRequestBody {
        this['spec'] = spec;
        return this;
    }
}