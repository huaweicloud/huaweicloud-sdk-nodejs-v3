import { DedicatedHostType } from './DedicatedHostType';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDedicatedHostAllTypesResponse extends SdkResponse {
    private 'dedicated_host_types'?: Array<DedicatedHostType>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withDedicatedHostTypes(dedicatedHostTypes: Array<DedicatedHostType>): ListDedicatedHostAllTypesResponse {
        this['dedicated_host_types'] = dedicatedHostTypes;
        return this;
    }
    public set dedicatedHostTypes(dedicatedHostTypes: Array<DedicatedHostType>  | undefined) {
        this['dedicated_host_types'] = dedicatedHostTypes;
    }
    public get dedicatedHostTypes(): Array<DedicatedHostType> | undefined {
        return this['dedicated_host_types'];
    }
    public withPageInfo(pageInfo: PageInfo): ListDedicatedHostAllTypesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}