import { NodeMetadata } from './NodeMetadata';
import { NodeSpec } from './NodeSpec';
import { NodeStatus } from './NodeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolNodeResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeMetadata;
    public spec?: NodeSpec;
    public status?: NodeStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowPoolNodeResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowPoolNodeResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeMetadata): ShowPoolNodeResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeSpec): ShowPoolNodeResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeStatus): ShowPoolNodeResponse {
        this['status'] = status;
        return this;
    }
}