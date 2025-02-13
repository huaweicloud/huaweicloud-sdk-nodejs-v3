import { ApiVersionObj } from './ApiVersionObj';
import { VpcEgressKindObj } from './VpcEgressKindObj';
import { VpcEgressResponseBodySpec } from './VpcEgressResponseBodySpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcEgressResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: VpcEgressKindObj;
    public spec?: VpcEgressResponseBodySpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateVpcEgressResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: VpcEgressKindObj): CreateVpcEgressResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: VpcEgressResponseBodySpec): CreateVpcEgressResponse {
        this['spec'] = spec;
        return this;
    }
}