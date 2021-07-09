import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNodeResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodeMetadata;
    public spec?: NodeSpec;
    public status?: NodeStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpdateNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdateNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): UpdateNodeResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeSpec): UpdateNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeStatus): UpdateNodeResponse {
        this['status'] = status;
        return this;
    }
}