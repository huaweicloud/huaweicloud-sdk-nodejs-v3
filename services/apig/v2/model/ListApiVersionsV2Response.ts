import { ApiVersionResp } from './ApiVersionResp';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    private 'api_versions'?: Array<ApiVersionResp>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApiVersionsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApiVersionsV2Response {
        this['total'] = total;
        return this;
    }
    public withApiVersions(apiVersions: Array<ApiVersionResp>): ListApiVersionsV2Response {
        this['api_versions'] = apiVersions;
        return this;
    }
    public set apiVersions(apiVersions: Array<ApiVersionResp>  | undefined) {
        this['api_versions'] = apiVersions;
    }
    public get apiVersions(): Array<ApiVersionResp> | undefined {
        return this['api_versions'];
    }
}