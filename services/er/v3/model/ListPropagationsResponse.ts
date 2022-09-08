import { PageInfo } from './PageInfo';
import { Propagation } from './Propagation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPropagationsResponse extends SdkResponse {
    public propagations?: Array<Propagation>;
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withPropagations(propagations: Array<Propagation>): ListPropagationsResponse {
        this['propagations'] = propagations;
        return this;
    }
    public withRequestId(requestId: string): ListPropagationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListPropagationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}