import { ApiVersionObj } from './ApiVersionObj';
import { EipKindObj } from './EipKindObj';
import { ListEipResponseBodySpec } from './ListEipResponseBodySpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEipsResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: EipKindObj;
    public spec?: ListEipResponseBodySpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListEipsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: EipKindObj): ListEipsResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: ListEipResponseBodySpec): ListEipsResponse {
        this['spec'] = spec;
        return this;
    }
}