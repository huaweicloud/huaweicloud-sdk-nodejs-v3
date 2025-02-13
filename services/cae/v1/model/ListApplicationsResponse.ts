import { ApiVersionObj } from './ApiVersionObj';
import { ApplicationItem } from './ApplicationItem';
import { ApplicationKindObj } from './ApplicationKindObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationsResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ApplicationKindObj;
    public items?: Array<ApplicationItem>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListApplicationsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ApplicationKindObj): ListApplicationsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<ApplicationItem>): ListApplicationsResponse {
        this['items'] = items;
        return this;
    }
}