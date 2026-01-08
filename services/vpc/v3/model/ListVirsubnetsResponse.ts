import { PageInfo } from './PageInfo';
import { Virsubnet } from './Virsubnet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVirsubnetsResponse extends SdkResponse {
    private 'request_id'?: string;
    public virsubnets?: Array<Virsubnet>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListVirsubnetsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVirsubnets(virsubnets: Array<Virsubnet>): ListVirsubnetsResponse {
        this['virsubnets'] = virsubnets;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListVirsubnetsResponse {
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