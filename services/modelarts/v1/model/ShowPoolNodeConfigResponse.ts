import { NodeconfigMeta } from './NodeconfigMeta';
import { NodeconfigSpec } from './NodeconfigSpec';
import { NodeconfigStatus } from './NodeconfigStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolNodeConfigResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeconfigMeta;
    public spec?: NodeconfigSpec;
    public status?: NodeconfigStatus;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowPoolNodeConfigResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowPoolNodeConfigResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeconfigMeta): ShowPoolNodeConfigResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeconfigSpec): ShowPoolNodeConfigResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeconfigStatus): ShowPoolNodeConfigResponse {
        this['status'] = status;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowPoolNodeConfigResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}