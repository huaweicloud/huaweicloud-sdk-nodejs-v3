import { NodeconfigMeta } from './NodeconfigMeta';
import { NodeconfigSpec } from './NodeconfigSpec';
import { NodeconfigStatus } from './NodeconfigStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PatchNodeConfigResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeconfigMeta;
    public spec?: NodeconfigSpec;
    public status?: NodeconfigStatus;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): PatchNodeConfigResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): PatchNodeConfigResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeconfigMeta): PatchNodeConfigResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeconfigSpec): PatchNodeConfigResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodeconfigStatus): PatchNodeConfigResponse {
        this['status'] = status;
        return this;
    }
    public withXRequestId(xRequestId: string): PatchNodeConfigResponse {
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