import { ApiVersionObj } from './ApiVersionObj';
import { ComponentKindObj } from './ComponentKindObj';
import { CreateComponentSpec } from './CreateComponentSpec';
import { MetadataResponse } from './MetadataResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateComponentResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public metadata?: MetadataResponse;
    public spec?: CreateComponentSpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateComponentResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): CreateComponentResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: MetadataResponse): CreateComponentResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CreateComponentSpec): CreateComponentResponse {
        this['spec'] = spec;
        return this;
    }
}