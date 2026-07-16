import { NodeconfigtemplateMetaV2 } from './NodeconfigtemplateMetaV2';
import { NodeconfigtemplatesSpec } from './NodeconfigtemplatesSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPoolNodeConfigTemplateResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeconfigtemplateMetaV2;
    public spec?: NodeconfigtemplatesSpec;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowPoolNodeConfigTemplateResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowPoolNodeConfigTemplateResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeconfigtemplateMetaV2): ShowPoolNodeConfigTemplateResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeconfigtemplatesSpec): ShowPoolNodeConfigTemplateResponse {
        this['spec'] = spec;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowPoolNodeConfigTemplateResponse {
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