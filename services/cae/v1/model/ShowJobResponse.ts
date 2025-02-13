import { ApiVersionObj } from './ApiVersionObj';
import { JobKindObj } from './JobKindObj';
import { JobSpec } from './JobSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: JobKindObj;
    public spec?: JobSpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ShowJobResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: JobKindObj): ShowJobResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: JobSpec): ShowJobResponse {
        this['spec'] = spec;
        return this;
    }
}