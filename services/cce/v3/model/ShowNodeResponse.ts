import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodeResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodeMetadata;
    public spec?: NodeSpec;
    public status?: NodeStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): ShowNodeResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeSpec): ShowNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeStatus): ShowNodeResponse {
        this['status'] = status;
        return this;
    }
}