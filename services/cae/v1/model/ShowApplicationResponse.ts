import { ApiVersionObj } from './ApiVersionObj';
import { ApplicationKindObj } from './ApplicationKindObj';
import { ApplicationMetadata } from './ApplicationMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ApplicationKindObj;
    public metadata?: ApplicationMetadata;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ShowApplicationResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ApplicationKindObj): ShowApplicationResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ApplicationMetadata): ShowApplicationResponse {
        this['metadata'] = metadata;
        return this;
    }
}