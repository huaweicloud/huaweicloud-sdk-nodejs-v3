import { ApiVersionObj } from './ApiVersionObj';
import { ComponentItem } from './ComponentItem';
import { ComponentKindObj } from './ComponentKindObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentsResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public items?: Array<ComponentItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListComponentsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): ListComponentsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<ComponentItem>): ListComponentsResponse {
        this['items'] = items;
        return this;
    }
    public withTotalCount(totalCount: number): ListComponentsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}