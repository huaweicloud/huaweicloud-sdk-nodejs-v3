import { ApiVersionObj } from './ApiVersionObj';
import { ComponentKindObj } from './ComponentKindObj';
import { ComponentSpec } from './ComponentSpec';
import { MetadataResponse } from './MetadataResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public metadata?: MetadataResponse;
    public spec?: ComponentSpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ShowComponentResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): ShowComponentResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: MetadataResponse): ShowComponentResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ComponentSpec): ShowComponentResponse {
        this['spec'] = spec;
        return this;
    }
}