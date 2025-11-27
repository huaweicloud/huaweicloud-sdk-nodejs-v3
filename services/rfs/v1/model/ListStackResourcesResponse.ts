import { PageInfo } from './PageInfo';
import { StackResource } from './StackResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackResourcesResponse extends SdkResponse {
    private 'stack_resources'?: Array<StackResource>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStackResources(stackResources: Array<StackResource>): ListStackResourcesResponse {
        this['stack_resources'] = stackResources;
        return this;
    }
    public set stackResources(stackResources: Array<StackResource>  | undefined) {
        this['stack_resources'] = stackResources;
    }
    public get stackResources(): Array<StackResource> | undefined {
        return this['stack_resources'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStackResourcesResponse {
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