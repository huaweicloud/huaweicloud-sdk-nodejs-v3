import { CsbResource } from './CsbResource';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainAllResourceResponse extends SdkResponse {
    private 'page_info'?: PageInfo;
    public resources?: Array<CsbResource>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: PageInfo): ListDomainAllResourceResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withResources(resources: Array<CsbResource>): ListDomainAllResourceResponse {
        this['resources'] = resources;
        return this;
    }
}