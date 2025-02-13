import { ApiVersionObj } from './ApiVersionObj';
import { DomainItem } from './DomainItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainsResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public items?: Array<DomainItem>;
    public kind?: string;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListDomainsResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withItems(items: Array<DomainItem>): ListDomainsResponse {
        this['items'] = items;
        return this;
    }
    public withKind(kind: string): ListDomainsResponse {
        this['kind'] = kind;
        return this;
    }
}