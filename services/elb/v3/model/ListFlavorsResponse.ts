import { Flavor } from './Flavor';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public flavors?: Array<Flavor>;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<Flavor>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListFlavorsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListFlavorsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}