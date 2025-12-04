import { PageInfo } from './PageInfo';
import { WarmPoolInstance } from './WarmPoolInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWarmPoolInstancesNewResponse extends SdkResponse {
    private 'page_info'?: PageInfo;
    private 'warm_pool_instances'?: Array<WarmPoolInstance>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: PageInfo): ListWarmPoolInstancesNewResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withWarmPoolInstances(warmPoolInstances: Array<WarmPoolInstance>): ListWarmPoolInstancesNewResponse {
        this['warm_pool_instances'] = warmPoolInstances;
        return this;
    }
    public set warmPoolInstances(warmPoolInstances: Array<WarmPoolInstance>  | undefined) {
        this['warm_pool_instances'] = warmPoolInstances;
    }
    public get warmPoolInstances(): Array<WarmPoolInstance> | undefined {
        return this['warm_pool_instances'];
    }
}