import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNodeResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodeMetadata;
    public spec?: NodeSpec;
    public status?: NodeStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): CreateNodeResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeSpec): CreateNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeStatus): CreateNodeResponse {
        this['status'] = status;
        return this;
    }
}