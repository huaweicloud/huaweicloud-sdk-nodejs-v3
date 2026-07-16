import { NodeConfigTemplateMeta } from './NodeConfigTemplateMeta';
import { NodeConfigTemplateSpec } from './NodeConfigTemplateSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodeConfigTemplateResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeConfigTemplateMeta;
    public spec?: NodeConfigTemplateSpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowNodeConfigTemplateResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowNodeConfigTemplateResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeConfigTemplateMeta): ShowNodeConfigTemplateResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodeConfigTemplateSpec): ShowNodeConfigTemplateResponse {
        this['spec'] = spec;
        return this;
    }
}