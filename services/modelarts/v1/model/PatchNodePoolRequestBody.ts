import { NodePoolSpec } from './NodePoolSpec';
import { PatchNodePoolMetaVO } from './PatchNodePoolMetaVO';


export class PatchNodePoolRequestBody {
    public metadata?: PatchNodePoolMetaVO;
    public spec?: NodePoolSpec;
    public constructor(spec?: NodePoolSpec) { 
        this['spec'] = spec;
    }
    public withMetadata(metadata: PatchNodePoolMetaVO): PatchNodePoolRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): PatchNodePoolRequestBody {
        this['spec'] = spec;
        return this;
    }
}