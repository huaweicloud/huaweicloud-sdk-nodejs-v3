import { PageInfoDTO } from './PageInfoDTO';
import { ResourceDetail } from './ResourceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterResourcesResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    private 'resource_list'?: Array<ResourceDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowClusterResourcesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): ShowClusterResourcesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withResourceList(resourceList: Array<ResourceDetail>): ShowClusterResourcesResponse {
        this['resource_list'] = resourceList;
        return this;
    }
    public set resourceList(resourceList: Array<ResourceDetail>  | undefined) {
        this['resource_list'] = resourceList;
    }
    public get resourceList(): Array<ResourceDetail> | undefined {
        return this['resource_list'];
    }
}