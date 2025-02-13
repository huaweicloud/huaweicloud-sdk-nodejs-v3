import { AgencyItem } from './AgencyItem';
import { AgencyKindObj } from './AgencyKindObj';
import { ApiVersionObj } from './ApiVersionObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgenciesResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: AgencyKindObj;
    public agencies?: Array<AgencyItem>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListAgenciesResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: AgencyKindObj): ListAgenciesResponse {
        this['kind'] = kind;
        return this;
    }
    public withAgencies(agencies: Array<AgencyItem>): ListAgenciesResponse {
        this['agencies'] = agencies;
        return this;
    }
}