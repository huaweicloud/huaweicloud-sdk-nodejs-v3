import { NodeMetadata } from './NodeMetadata';
import { V3NodeSpec } from './V3NodeSpec';
import { V3NodeStatus } from './V3NodeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNodeResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeMetadata;
    public spec?: V3NodeSpec;
    public status?: V3NodeStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): UpdateNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): UpdateNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): UpdateNodeResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V3NodeSpec): UpdateNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: V3NodeStatus): UpdateNodeResponse {
        this['status'] = status;
        return this;
    }
}