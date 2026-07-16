import { CreateNodePoolMetaVO } from './CreateNodePoolMetaVO';
import { NodePoolSpec } from './NodePoolSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNodePoolResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: CreateNodePoolMetaVO;
    public spec?: NodePoolSpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateNodePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreateNodePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateNodePoolMetaVO): CreateNodePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): CreateNodePoolResponse {
        this['spec'] = spec;
        return this;
    }
}