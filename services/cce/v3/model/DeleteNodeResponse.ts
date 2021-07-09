import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteNodeResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodeMetadata;
    public spec?: NodeSpec;
    public status?: NodeStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): DeleteNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): DeleteNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): DeleteNodeResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeSpec): DeleteNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeStatus): DeleteNodeResponse {
        this['status'] = status;
        return this;
    }
}