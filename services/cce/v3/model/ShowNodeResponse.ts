import { NodeMetadata } from './NodeMetadata';
import { V3NodeSpec } from './V3NodeSpec';
import { V3NodeStatus } from './V3NodeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodeResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodeMetadata;
    public spec?: V3NodeSpec;
    public status?: V3NodeStatus;
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
    public withSpec(spec: V3NodeSpec): ShowNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: V3NodeStatus): ShowNodeResponse {
        this['status'] = status;
        return this;
    }
}