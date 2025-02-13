import { ApiVersionObj } from './ApiVersionObj';
import { EnvironmentItem } from './EnvironmentItem';
import { EnvironmentKindObj } from './EnvironmentKindObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentsResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: EnvironmentKindObj;
    public items?: Array<EnvironmentItem>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListEnvironmentsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: EnvironmentKindObj): ListEnvironmentsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<EnvironmentItem>): ListEnvironmentsResponse {
        this['items'] = items;
        return this;
    }
}