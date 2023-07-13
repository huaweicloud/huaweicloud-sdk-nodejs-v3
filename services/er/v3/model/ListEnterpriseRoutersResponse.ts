import { EnterpriseRouter } from './EnterpriseRouter';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnterpriseRoutersResponse extends SdkResponse {
    public instances?: Array<EnterpriseRouter>;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<EnterpriseRouter>): ListEnterpriseRoutersResponse {
        this['instances'] = instances;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListEnterpriseRoutersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListEnterpriseRoutersResponse {
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