import { ApiVersionObj } from './ApiVersionObj';
import { DomainItem } from './DomainItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDomainResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public items?: Array<DomainItem>;
    public kind?: string;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateDomainResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withItems(items: Array<DomainItem>): CreateDomainResponse {
        this['items'] = items;
        return this;
    }
    public withKind(kind: string): CreateDomainResponse {
        this['kind'] = kind;
        return this;
    }
}