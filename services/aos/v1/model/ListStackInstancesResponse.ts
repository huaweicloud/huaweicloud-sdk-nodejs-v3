import { PageInfo } from './PageInfo';
import { StackInstance } from './StackInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackInstancesResponse extends SdkResponse {
    private 'stack_instances'?: Array<StackInstance>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStackInstances(stackInstances: Array<StackInstance>): ListStackInstancesResponse {
        this['stack_instances'] = stackInstances;
        return this;
    }
    public set stackInstances(stackInstances: Array<StackInstance>  | undefined) {
        this['stack_instances'] = stackInstances;
    }
    public get stackInstances(): Array<StackInstance> | undefined {
        return this['stack_instances'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStackInstancesResponse {
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