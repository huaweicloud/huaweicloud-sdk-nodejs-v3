import { NodePoolSpec } from './NodePoolSpec';
import { PatchNodePoolMetaVO } from './PatchNodePoolMetaVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PatchNodePoolResponse extends SdkResponse {
    public metadata?: PatchNodePoolMetaVO;
    public spec?: NodePoolSpec;
    public constructor() { 
        super();
    }
    public withMetadata(metadata: PatchNodePoolMetaVO): PatchNodePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): PatchNodePoolResponse {
        this['spec'] = spec;
        return this;
    }
}